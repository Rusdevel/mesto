import Card from './components/Card.js';
import {enableValidation} from './utils/validateConfig.js';
import { initialCards } from './utils/initialCards.js';
import FormValidator  from './components/FormValidator.js';
import Section from './components/Section.js';
import { UserInfo } from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
const profileButton = document.querySelector('.profile__button'); 
const cardButton = document.querySelector('.profile__edit-button');
const popupAddCard = '.popup_type_edite-card';
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
//эксземпляр класса попапа карточки
const popupWithImage = new PopupWithImage('.popup_type_image');
//создаем новый экземпляр карточки
 const createCard = (item) => {
   const card = new Card(item, '#templateCard', () => {
     popupWithImage.open(item);
   } );
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

// Переменая для текста работы куда будет добавляться новый текст 
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
//настройки формы профиля
const popupProfile = new PopupWithForm('.popup_type_edit-profile', {
  handlerSubmit: () => {
    userInfo.setUserInfo(popupProfile._getInputValues());
    popupProfile.close();
  }
});
//настройка формы добаления карточки
const popupAddCards = new PopupWithForm(popupAddCard, {
  handlerSubmit: (data) => {
    createCard(data);
    placeList.prepend(createCard(data));
    popupAddCards.close();
  }
});

profileButton.addEventListener('click', openProfilePopup);
cardButton.addEventListener('click', () => {popupAddCards.open()});

// экземпляр класса валидации профиля
const validatorForProfile = new FormValidator(enableValidation, formProfile);
validatorForProfile.enebleValidation();

// экземпляр класса валидации карточек
const poupImage = document.querySelector('.popup__form_add-form');
const validatorForCard = new FormValidator(enableValidation, poupImage);
validatorForCard.enebleValidation();