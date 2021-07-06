import Card from './Card.js';
import {enableValidation} from './validateConfig.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import { PopupFormCard } from './popupFormCard.js';
import { initialCards } from '../scripts/initialCards.js';
import { PopupForProfile } from './popupProfile.js';
import  FormValidatorCardPopup  from './FormValidatorCardPopup.js';
const profileButton = document.querySelector('.profile__button'); 

const cardButton = document.querySelector('.profile__edit-button');
//Шаблон попапа для карточек
//const templateCardProfile = document.querySelector('#popup_card').content;
//Клонируем содержимое шаблона попапа карточек
const popupAddCard = document.querySelector('.popup_type_edite-card');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');

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
document.addEventListener('click', () => poupCard._setEventListners());

// класс для валидации профиля
const validatorForProfile = new FormValidator(enableValidation, popupEditProfile);
validatorForProfile.setEventListner();

//класс для работы с формой
const popupFormCard = new PopupFormCard(popupAddCard, '.popup__form_add-form', (data) => {
    createCard(data);
    placeList.prepend(createCard(data));
});
cardButton.addEventListener('click', () => {popupFormCard.openPopup()});

// класс для валидации добавления карточек
const poupImage = document.querySelector('.popup_type_edite-card');
const validatorForCard = new FormValidatorCardPopup(enableValidation, poupImage);
validatorForCard.setEventListner();

const popupProfile = new PopupForProfile(popupEditProfile, formEditProfle);

profileButton.addEventListener('click', () => { popupProfile.openPopup() });


