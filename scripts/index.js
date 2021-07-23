import Card from './Card.js';
import {enableValidation} from './utils/validateConfig.js';
import Popup from './Popup.js';
import { PopupFormCard } from './popupFormCard.js';
import { initialCards } from './utils/initialCards.js';
//import { PopupForProfile } from './popupProfile.js';
import FormValidator  from './FormValidator.js';
import Section from './Section.js';
import { UserInfo } from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
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

const nameInput = formEditProfle.querySelector('.popup__input_type_name');
const jobInput = formEditProfle.querySelector('.popup__input_type_job');


//создаем новый экземпляр карточки
 const createCard = (item) => {
    const card = new Card(item, '#templateCard');
    return card.generateCard();
  } 

// создание нового элеменита карточки. Где мы из массива берем ссылку, название картинки и альт.
const section = new Section({
  items: initialCards, renderer: (item) => {
    const card = createCard(item);
    section.addItem(card, 'append');
  },
}, placeList);
section.renderer();
/*//перебираем массив карточек
initialCards.forEach((item) => {
    // Добавляем в DOM
    placeList.append(createCard(item));
});*/


/* Переменая для текста работы куда будет добавляться новый текст */
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const userInfo = new UserInfo(profileName, profileJob);


//Функция открытия попапа редактирования
function openProfilePopup() {

  const getProfileData = userInfo.getUserInfo();
  nameInput.value = getProfileData.name;
  jobInput.value = getProfileData.jobName;
  popupProfile.open();
}


const popupProfile = new PopupWithForm(popupEditProfile, {
  handlerSubmit: (options) => {
    userInfo.setUserInfo(options);
    popupProfile.close();
  }
});




/*
//создаем экземпляр класса попапа карточек
const popupCard = new Popup(imagePopup);
//создаем функцию для вызова открытия попапа карточки
export function openCardPopup() {
  popupCard.openPopup();
}*/
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
});

// экземпляр класса валидации карточек
const poupImage = document.querySelector('.popup__form_add-form');
const validatorForCard = new FormValidator(enableValidation, poupImage);
validatorForCard.enebleValidation();
/*
//экземпляр класса профиля
const popupProfile = new PopupForProfile(popupEditProfile, formEditProfle);
profileButton.addEventListener('click', () => { popupProfile.openPopup() });
*/


