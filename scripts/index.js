const profileButton = document.querySelector('.profile__button'); 
//Найдем тамплейт попапа профиля и получим его содержимое
const templateProfile = document.querySelector('#popup_profile').content;
//найдем page
const page = document.querySelector('.page'); 
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job');
const placeList = document.querySelector('.places-list');
const cardButtonProfile = document.querySelector('.profile__edit-button');
//Шаблон попапа для карточек
const templateCardProfile = document.querySelector('#popup_card').content;
//Клонируем содержимое шаблона попапа карточек
const cardElementProfile = templateCardProfile.querySelector('.popup').cloneNode(true);
//Кнопка закрытия для карточек
const closeButtonCardProfile = cardElementProfile.querySelector('.popup__close');
const formElementCard = cardElementProfile.querySelector('.popup__form');
const nameCard = cardElementProfile.querySelector('.popup__input_type_name');
// поле ссылки в форме попапа карты
const linkCard = cardElementProfile.querySelector('.popup__input_type_job');
//Клонируем содержимое шаблона профиля
const profileElement = templateProfile.querySelector('.popup').cloneNode(true);
//Кнопка закрытия профиля
const closeButton = profileElement.querySelector('.popup__close');
// Находим форму
const formElement = profileElement.querySelector('.popup__form');



//шаблон карточки
const templateCard = document.querySelector('#templateCard').content;
const cardElement = templateCard.querySelector('.place-card').cloneNode(true);
const like = cardElement.querySelector('.place-card__like-img');

    // Находим поля формы в DOM 
const nameInput = formElement.querySelector('.popup__input_type_name'); 
const jobInput = formElement.querySelector('.popup__input_type_job'); 



 // Функция отправки формы
function formSubmitHandler(evt) { 
    evt.preventDefault();  
    profileName.textContent = nameInput.value; 
    profileJob.textContent = jobInput.value;
// Закрываем попап после отправки формы
    closePopup();
} 
 // Обработчик события на отправку формы
formElement.addEventListener('submit', formSubmitHandler); 
 
 // Функия открытия попапа
function openPopup () { 
    page.append(profileElement);
    nameInput.value = profileName.textContent; 
    jobInput.value = profileJob.textContent;
} 
 // Функия закрытия попапа
function closePopup() { 
    profileElement.remove();
} 
 // Обработчик события на открытие попапа
profileButton.addEventListener('click', openPopup); 
 // Обработчик события на закрытие попапа
closeButton.addEventListener('click', closePopup);

// открытие попапа карточек
function openPopupCard() {
    page.append(cardElementProfile);
    
}
// Функия закрытия попапа карточек
function closePopupCard() {
    cardElementProfile.remove();
    nameCard.value = '';
    linkCard.value = ''; 
    
}

// Обработчик события на открытие попапа
cardButtonProfile.addEventListener('click', openPopupCard);
// Обработчик события на закрытие попапа
closeButtonCardProfile.addEventListener('click', closePopupCard);



function likeCard (evt) {
    evt.target.classList.toggle('place-card__like-img_active');
}
function closeCard (evt) {
    evt.target.closest('.place-card').remove();
}

//////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////////
// для просмотра фото
const templateImagePopup = document.querySelector('#image_popup').content;
const imagePopup = templateImagePopup.querySelector('.popup').cloneNode(true);
const popupImage = imagePopup.querySelector('.popup__container');
const pupupImageCard = imagePopup.querySelector('.popup__image');
const closeBtnpopupImage = imagePopup.querySelector('.popup__close');
const popupImageTitle = imagePopup.querySelector('.popup__title_image');

/*
function ex() {
    console.log('dcdc');
}
placeList.addEventListener('click', ex);
*/
function openPopupImage() {
    page.append(imagePopup);

}
function closePopupImage () {
    imagePopup.remove();
}

function openFullImage(event) {
    pupupImageCard.src = event.target.src;
    if (event.target.classList.contains('place-card__image')) {
        popupImageTitle.textContent = event.target.parentNode.querySelector('.place-card__title').textContent;
    }
    openPopupImage();
}

closeBtnpopupImage.addEventListener('click', closePopupImage);
placeList.addEventListener('click', openFullImage);
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function createCardElement (item) {
    //Клонируем содержимое шаблона карточек
    const cardElement = templateCard.querySelector('.place-card').cloneNode(true);
    const image = cardElement.querySelector('.place-card__image');
    const placeCard = cardElement.querySelector('.place-card__title');
    image.src = item.link;
    placeCard.textContent = item.name;
    cardElement.querySelector('.place-card__like-img').addEventListener('click', likeCard);
    cardElement.querySelector('.place-card__trash').addEventListener('click', closeCard);
    return cardElement;
    
}

//массив с карточками
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function renderCards() {
    initialCards.forEach((cards) => {
        
        placeList.append(createCardElement(cards));
});
}
renderCards();



function formSubmitHandlerCard(evt) {
    evt.preventDefault();
    const popupItem = {
        name: nameCard.value,
        link: linkCard.value
    }
    nameCard.value = '';
    linkCard.value = '';
    
    placeList.appendChild(createCardElement(popupItem))
    // Закрываем попап после отправки формы
    closePopupCard()
    
    
}
formElementCard.addEventListener('submit', formSubmitHandlerCard);



