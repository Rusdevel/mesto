const profileButton = document.querySelector('.profile__button'); 
//Найдем тамплейт попапа профиля и получим его содержимое
//const templateProfile = document.querySelector('#popup_profile').content;
//найдем page
const page = document.querySelector('.page'); 
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job');
const placeList = document.querySelector('.places-list');
const cardButtonProfile = document.querySelector('.profile__edit-button');
//Шаблон попапа для карточек
//const templateCardProfile = document.querySelector('#popup_card').content;
//Клонируем содержимое шаблона попапа карточек
const cardElementProfile = document.querySelector('.popup_type_edite_card');
//Кнопка закрытия для карточек
const closeButtonCardProfile = cardElementProfile.querySelector('.popup__close');
const formElementCard = cardElementProfile.querySelector('.popup_type_form_edite_card');
const nameCard = cardElementProfile.querySelector('.popup__input_type_edite_card_name');
// поле ссылки в форме попапа карты
const linkCard = cardElementProfile.querySelector('.popup__input_type_edite_card_link');

//Находим содержимое попапа профиля
const profileElement = document.querySelector('.popup_type_edit-profile');

//Кнопка закрытия профиля
const closeButton = profileElement.querySelector('.popup__close');
// Находим форму
const formElement = profileElement.querySelector('.popup__form');

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
//шаблон карточки
const templateCard = document.querySelector('#templateCard').content;
const cardElement = templateCard.querySelector('.place-card').cloneNode(true);
const like = cardElement.querySelector('.place-card__like-img');

    // Находим поля формы в DOM 
const nameInput = formElement.querySelector('.popup__input_type_name'); 
const jobInput = formElement.querySelector('.popup__input_type_job'); 
 // Функия открытия попапов
function openPopups (element) { 
    element.classList.add('popup_open');
}
//Функция открытия попапа профиля
function openPopupProfile() {
    openPopups(profileElement);
    nameInput.value = profileName.textContent; 
    jobInput.value = profileJob.textContent;
}
 // Функия закрытия попапа
function closePopups(element) { 
    element.classList.remove('popup_open');
} 
 // Обработчик события на открытие попапа
profileButton.addEventListener('click', openPopupProfile); 
 // Обработчик события на закрытие попапа
closeButton.addEventListener('click', () => closePopups(profileElement));

// Функция отправки формы
function formEditProfileSubmitHandler(evt) { 
    evt.preventDefault();  
    profileName.textContent = nameInput.value; 
    profileJob.textContent = jobInput.value;
// Закрываем попап после отправки формы
    closePopups(profileElement);
} 
 // Обработчик события на отправку формы профиля
formElement.addEventListener('submit', formEditProfileSubmitHandler); 
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Функия закрытия попапа карточек
function closePopupCard() {
    closePopups(cardElementProfile)
    nameCard.value = '';
    linkCard.value = ''; 
}

// Обработчик события на открытие попапа
cardButtonProfile.addEventListener('click', () => openPopups(cardElementProfile));
// Обработчик события на закрытие попапа
closeButtonCardProfile.addEventListener('click', closePopupCard);
formElementCard.addEventListener('submit', formAddCardSubmitHandler);

//Загружаем фото и название карточки через попап
function formAddCardSubmitHandler(evt) {
    evt.preventDefault();
    const popupItem = {
        name: nameCard.value,
        link: linkCard.value
    }
    nameCard.value = '';
    linkCard.value = '';
    //добовляем карточку в конец списка 
    placeList.appendChild(createCardElement(popupItem))
    // Закрываем попап после отправки формы
    closePopupCard();
}

function likeCard (evt) {
    evt.target.classList.toggle('place-card__like-img_active');
}
function deleteCard (evt) {
    evt.target.closest('.place-card').remove();
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// для просмотра фото
const imagePopup = document.querySelector('.popup_type_image');
const popupContainer = imagePopup.querySelector('.popup__container');
const popupImageCard = imagePopup.querySelector('.popup__image');
const closeBtnpopupImage = imagePopup.querySelector('.popup__close');
const popupImageTitle = imagePopup.querySelector('.popup__title_image');

function openFullImage(event) {
    popupImageCard.src = event.target.src;
    popupImageCard.alt = event.target.parentNode.querySelector('.place-card__title').textContent;
    popupImageTitle.textContent = event.target.parentNode.querySelector('.place-card__title').textContent;

        openPopups(imagePopup);

}

closeBtnpopupImage.addEventListener('click', () => closePopups(imagePopup));
placeList.addEventListener('click', openFullImage);
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// создаем карточки с фото
function createCardElement (item) {
    //Клонируем содержимое шаблона карточек
    const cardElement = templateCard.querySelector('.place-card').cloneNode(true);
    const image = cardElement.querySelector('.place-card__image');
    const placeCard = cardElement.querySelector('.place-card__title');
    image.src = item.link;
    placeCard.textContent = item.name;
    cardElement.querySelector('.place-card__like-img').addEventListener('click', likeCard);
    cardElement.querySelector('.place-card__trash').addEventListener('click', deleteCard);
    return cardElement;
}
// отрисовываем карточки из массива на странице
function renderCards() {
    initialCards.forEach((cards) => {
        placeList.append(createCardElement(cards));
});
}
renderCards();