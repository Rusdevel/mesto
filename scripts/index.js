import Card from './Card.js';
import {enableValidation} from './validateConfig.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import { PopupFormCard } from './popupFormCard.js';
import { initialCards } from '../scripts/initialCards.js';
import { PopupForProfile } from './popupProfile.js';
const profileButton = document.querySelector('.profile__button'); 

//Найдем тамплейт попапа профиля и получим его содержимое
//const templateProfile = document.querySelector('#popup_profile').content;
//найдем page
const page = document.querySelector('.page'); 

const cardButton = document.querySelector('.profile__edit-button');
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
const popupEditProfile = document.querySelector('.popup_type_edit-profile');

//Кнопка закрытия профиля
const closeEditProfilePopupBtn = popupEditProfile.querySelector('.popup__close');
// Находим форму
const formEditProfle = popupEditProfile.querySelector('.popup__form');
    
 // Обработчик события на закрытие попапа
//closeEditProfilePopupBtn.addEventListener('click', () => closePopups(popupEditProfile));
/*
/
// Функия закрытия попапа карточек
function closePopupCard() {
    closePopups(popupAddCard)
    nameCard.value = '';
    linkCard.value = ''; 
}
*/

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

// Функция закрытие попапа через overlay
 /*function closePopupsOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
      const element = document.querySelector('.popup_open')
      closePopups(element);
    }
  }
 */
// Закрытие попапа через esc
/*function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const element = document.querySelector('.popup_open');
        closePopups(element);
    }
}*/
// класс для валидации профиля
const validatorForProfile = new FormValidator(enableValidation, popupEditProfile);
validatorForProfile.enableForm();

//класс для работы с формой
const popupFormCard = new PopupFormCard(popupAddCard, '.popup__form_add-form', (data) => {
    const card = new Card(data, '#templateCard').generateCard();
    const placeList = document.querySelector('.places-list');
    placeList.prepend(card);
});
// класс для валидации добавления карточек
const poupImage = document.querySelector('.popup_type_edite-card');
const validatorForCard = new FormValidator(enableValidation, poupImage);
validatorForCard.enableForm();

const popupProfile = new PopupForProfile(popupEditProfile, formEditProfle);

profileButton.addEventListener('click', () => { popupProfile.openPopup() });

//const popup = new Popup(popupAddCard);
cardButton.addEventListener('click', () => {popupFormCard.openPopup()});
