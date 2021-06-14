import Card from './Card.js';
import PopupFormCard from './popupFormCard.js';
import { enableValidation } from '../scripts/validate.js';
import { initialCards } from '../scripts/initialCards.js';
const profileButton = document.querySelector('.profile__button'); 
//Найдем тамплейт попапа профиля и получим его содержимое
//const templateProfile = document.querySelector('#popup_profile').content;
//найдем page
const page = document.querySelector('.page'); 
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job');

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
const popupButton = popupAddCard.querySelector('.popup__button');


//Находим содержимое попапа профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');

//Кнопка закрытия профиля
const closeEditProfilePopupBtn = popupEditProfile.querySelector('.popup__close');
// Находим форму
const formEditProfle = popupEditProfile.querySelector('.popup__form');



    // Находим поля формы в DOM 
const nameInput = formEditProfle.querySelector('.popup__input_type_name'); 
const jobInput = formEditProfle.querySelector('.popup__input_type_job'); 
 // Функия открытия попапов
function openPopups (element) { 
    element.classList.add('popup_open'); 
    document.addEventListener('keydown', closePopupEsc);
}


//Функция открытия попапа профиля
function openPopupProfile() {
    openPopups(popupEditProfile);
    nameInput.value = profileName.textContent; 
    jobInput.value = profileJob.textContent;
}
 // Функия закрытия попапа
/*function closePopups(element) { 
    element.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupEsc);
} */
 // Обработчик события на открытие попапа
profileButton.addEventListener('click', openPopupProfile); 
 // Обработчик события на закрытие попапа
closeEditProfilePopupBtn.addEventListener('click', () => closePopups(popupEditProfile));

// Функция отправки формы
function handleProfileFormSubmit(evt) { 
    evt.preventDefault();  
    profileName.textContent = nameInput.value; 
    profileJob.textContent = jobInput.value;
// Закрываем попап после отправки формы
    closePopups(popupEditProfile);
} 
 // Обработчик события на отправку формы профиля
formEditProfle.addEventListener('submit', handleProfileFormSubmit);

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
//formAddCard.addEventListener('submit', handlerFormAddCardSubmit);

//Обработчик события на закрытие попапа через overlay
document.addEventListener('click', closePopupsOverlay);



/*function handlerFormAddCardSubmit(evt) {
    evt.preventDefault();
    const card = new Card(initialCards, '#templateCard');
    initialCards({ name: nameCard.value, link: linkCard.value});
    const cardElement = card.generateCard();
    const placeList = document.querySelector('.places-list');
    placeList.append(cardElement);

}*/

//Загружаем фото и название карточки через попап
/*function handlerFormAddCardSubmit(evt) {
    evt.preventDefault();
    // Создадим экземпляр карточки
    const card = new Card(date, '#templateCard');
    nameCard.value = '';
    linkCard.value = '';
    //добовляем карточку в конец списка 
    placeList.prepend(createCardElement(popupItem))
    //блокируем кнопку отправки
    popupButton.classList.add('popup__button_disabled');
    popupButton.setAttribute('disabled', 'disabled');
    // Закрываем попап после отправки формы
    closePopupCard();
}*/

initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item, '#templateCard');
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    // Добавляем в DOM
    const placeList = document.querySelector('.places-list');
    placeList.append(cardElement);
});
/*
// для просмотра фото
const imagePopup = document.querySelector('.popup_type_image');
const popupContainer = imagePopup.querySelector('.popup__container');
const pupupImageCard = imagePopup.querySelector('.popup__image');
const closeBtnpopupImage = imagePopup.querySelector('.popup__close');
const popupImageTitle = imagePopup.querySelector('.popup__image-title');
*/

// Функция закрытие попапа через overlay
 function closePopupsOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
      const element = document.querySelector('.popup_open')
      closePopups(element);
    }
  }
 
// Закрытие попапа через esc
/*function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const element = document.querySelector('.popup_open');
        closePopups(element);
    }
}*/

/*function openFullImage(link, name) {
    pupupImageCard.src = link.src;
    pupupImageCard.alt = name.textContent;
    popupImageTitle.textContent = name.textContent;
    openPopups(imagePopup);
}*/

/*function createElement(item) {
    // Создадим экземпляр карточки
    const card = new Card(item, '#templateCard', openFullImage);
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    return cardElement;
}
//function renderInitialCards() {
    initialCards.forEach((item) => {
        const cardElement = createElement(item);
        document.querySelector('.places-list').append(cardElement);
    });
}

renderInitialCards();
*/
/*initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Card(item, '#templateCard');
    // Создаём карточку и возвращаем наружу
    const cardElement = card.generateCard();
    // Добавляем в DOM
    const placeList = document.querySelector('.places-list');
    placeList.append(cardElement);
});*/

//closeBtnpopupImage.addEventListener('click', () => closePopups(imagePopup));

/*class FormValidator {
    constructor(validateConfig, formElement) {
        this._validateConfig = enableValidation;
        this._formElement = formElement;
    }
}
*/
//класс для работы с формой

const popupFormCard = new PopupFormCard('.popup__form_add-form', (data) => {
    const card = new Card(data, '#templateCard').generateCard();
    const placeList = document.querySelector('.places-list');
    placeList.prepend(card);
});


class PopupForm {
    constructor(formSelector, addElement) {
        this._addElement = addElement;
        document.querySelector(formSelector0. addEventListener)('submit', this._handlerFormSubmit);
    }
    _handlerFormSubmit = (evt) => {
        evt.preventDefault();
        //берем данные из формы
        const data = Object.fromEntries(new FormData(evt.target));
        this._addElement(data);
        evt.target.reset();
        const popupElement = document.querySelector('.popup_type_edit-profile');
        popupElement.classList.remove('popup_open');
    }
    _generateProfile() {
        this.popupElement.querySelector('#name__input').textContent = this.data.name;
        this.popupElement.querySelector('job-input').textContent = this.data.description;
    }
}