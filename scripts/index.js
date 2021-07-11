import Card from './Card.js';
import {enableValidation} from './validateConfig.js';
import Popup from './Popup.js';
import { PopupFormCard } from './popupFormCard.js';
import { initialCards } from '../scripts/initialCards.js';
import { PopupForProfile } from './popupProfile.js';
import FormValidator  from './FormValidatorCardPopup.js';
const profileButton = document.querySelector('.profile__button'); 

const cardButton = document.querySelector('.profile__edit-button');
const popupAddCard = document.querySelector('.popup_type_edite-card');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const formProfile = document.querySelector('.popup__form_profile');
// Находим форму
const formEditProfle = popupEditProfile.querySelector('.popup__form');
// попап карточки
const imagePopup = document.querySelector('.popup_type_image');
// элемент списка карточек
const placeList = document.querySelector('.places-list');
//создаем новый экземпляр карточки
 const createCard = (item) => {
    const card = new Card(item, '#templateCard');
    return card.generateCard();
  } 
//перебираем массив карточек
initialCards.forEach((item) => {
    // Добавляем в DOM
    placeList.append(createCard(item));
});

//создаем экземпляр класса попапа карточек
const popupCard = new Popup(imagePopup);
//создаем функцию для вызова открытия попапа карточки
export function openCardPopup() {
  popupCard.openPopup();
}
// экземпляр класса валидации профиля
const validatorForProfile = new FormValidator(enableValidation, formProfile);
validatorForProfile.enebleValidation();

//класс для работы с формой
const popupFormCard = new PopupFormCard(popupAddCard, '.popup__form_add-form', (data) => {
    createCard(data);
    placeList.prepend(createCard(data));
});
//слушатель на эткрытие формы карточки и блокировки сабмита
cardButton.addEventListener('click', () => {popupFormCard.openPopup()
  validatorForCard.enebleValidation();
});

// экземпляр класса валидации карточек
const poupImage = document.querySelector('.popup__form_add-form');
const validatorForCard = new FormValidator(enableValidation, poupImage);

//экземпляр класса профиля
const popupProfile = new PopupForProfile(popupEditProfile, formEditProfle);
profileButton.addEventListener('click', () => { popupProfile.openPopup() });