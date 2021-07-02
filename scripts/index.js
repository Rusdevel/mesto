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
    
//карточка
const cardImage = '.place-card__image';
// попап карточки
const imagePopup = document.querySelector('.popup_type_image');
//создаем новый экземпляр карточки
 const createCard = (item) => {
    const card = new Card(item, '#templateCard');
    return card.generateCard();
  } 
  // элемент списка карточек
  const placeList = document.querySelector('.places-list');
  
initialCards.forEach((item) => {
    
    // Добавляем в DOM
    placeList.append(createCard(item));
});
//создаем экземпляр класса попапа карточек
const poupCard = new Popup(imagePopup);
//устанвливаем слушатель на поппап карточки
document.querySelector(cardImage).addEventListener('click', () => poupCard._setEventListners());
 
// класс для валидации профиля
const validatorForProfile = new FormValidator(enableValidation, popupEditProfile);
validatorForProfile.enableForm();

//класс для работы с формой
const popupFormCard = new PopupFormCard(popupAddCard, '.popup__form_add-form', (data) => {
    createCard(data);
    const placeList = document.querySelector('.places-list');
    placeList.prepend(createCard(data));
});
// класс для валидации добавления карточек
const poupImage = document.querySelector('.popup_type_edite-card');
const validatorForCard = new FormValidator(enableValidation, poupImage);
validatorForCard.enableForm();

const popupProfile = new PopupForProfile(popupEditProfile, formEditProfle);

profileButton.addEventListener('click', () => { popupProfile.openPopup() });

//const popup = new Popup(popupAddCard);
cardButton.addEventListener('click', () => {popupFormCard.openPopup()});