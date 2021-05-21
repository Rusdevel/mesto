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
const popupAddCard = document.querySelector('.popup_type_edite-card');
//Кнопка закрытия для карточек
const closeButtonCardProfile = popupAddCard.querySelector('.popup__close');
const formAddCard = popupAddCard.querySelector('.popup__form_add-form');
const nameCard = popupAddCard.querySelector('.popup__input_type_edite-card-name');
// поле ссылки в форме попапа карты
const linkCard = popupAddCard.querySelector('.popup__input_type_edite-card-link');
const popupContent = document.querySelector('.popup__content');

//Находим содержимое попапа профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');

//Кнопка закрытия профиля
const closeEditProfilePopupBtn = popupEditProfile.querySelector('.popup__close');
// Находим форму
const formEditProfle = popupEditProfile.querySelector('.popup__form');

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
const nameInput = formEditProfle.querySelector('.popup__input_type_name'); 
const jobInput = formEditProfle.querySelector('.popup__input_type_job'); 
 // Функия открытия попапов
function openPopups (element) { 
    element.classList.add('popup_open'); 
    closePopupsOverlay(element);
    document.addEventListener('keydown', closePopupEsc);
}
//Функция открытия попапа профиля
function openPopupProfile() {
    openPopups(popupEditProfile);
    nameInput.value = profileName.textContent; 
    jobInput.value = profileJob.textContent;
}
 // Функия закрытия попапа
function closePopups(element) { 
    element.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupEsc);
} 
 // Обработчик события на открытие попапа
profileButton.addEventListener('click', openPopupProfile); 
 // Обработчик события на закрытие попапа
closeEditProfilePopupBtn.addEventListener('click', () => closePopups(popupEditProfile));

// Функция отправки формы
function formEditProfileSubmitHandler(evt) { 
    evt.preventDefault();  
    profileName.textContent = nameInput.value; 
    profileJob.textContent = jobInput.value;
// Закрываем попап после отправки формы
    closePopups(popupEditProfile);
} 
 // Обработчик события на отправку формы профиля
formEditProfle.addEventListener('submit', formEditProfileSubmitHandler);

// Функия закрытия попапа карточек
function closePopupCard() {
    closePopups(popupAddCard)
    nameCard.value = '';
    linkCard.value = ''; 
}

// Обработчик события на открытие попапа
cardButtonProfile.addEventListener('click', () => openPopups(popupAddCard));

// Обработчик события на закрытие попапа
closeButtonCardProfile.addEventListener('click', closePopupCard);
formAddCard.addEventListener('submit', formAddCardSubmitHandler);


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

// для просмотра фото
const imagePopup = document.querySelector('.popup_type_image');
const popupContainer = imagePopup.querySelector('.popup__container');
const pupupImageCard = imagePopup.querySelector('.popup__image');
const closeBtnpopupImage = imagePopup.querySelector('.popup__close');
const popupImageTitle = imagePopup.querySelector('.popup__image-title');

//Закрытие попапа через overlay
closePopupsOverlay = (element) => {
    element.addEventListener('mousedown', (evt) => {
        if (evt.target == element) {
            closePopups(element);
        };
    });
};
// Закрытие попапа через esc
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const element = document.querySelector('.popup_open');
        closePopups(element);
    }
}


function openFullImage(link, name) {
    pupupImageCard.src = link.src;
    pupupImageCard.alt = name.textContent;
    popupImageTitle.textContent = name.textContent;
    openPopups(imagePopup);
}

closeBtnpopupImage.addEventListener('click', () => closePopups(imagePopup));


// создаем карточки с фото
function createCardElement (item) {
    //Клонируем содержимое шаблона карточек
    const cardElement = templateCard.querySelector('.place-card').cloneNode(true);
    const image = cardElement.querySelector('.place-card__image');
    const placeCard = cardElement.querySelector('.place-card__title');
    image.src = item.link;
    placeCard.textContent = item.name;
    image.alt = item.name;
    cardElement.querySelector('.place-card__like-img').addEventListener('click', likeCard);
    cardElement.querySelector('.place-card__trash').addEventListener('click', deleteCard);
    image.addEventListener('click', () => openFullImage(image, placeCard));
    return cardElement;
}
// отрисовываем карточки из массива на странице
function renderCards() {
    initialCards.forEach((cards) => {
        placeList.append(createCardElement(cards));
});
}
renderCards();