import './pages/index.css'
import Card from './scripts/components/Card.js';
import {enableValidation} from './scripts/utils/validateConfig.js';
import { initialCards } from './scripts/utils/initialCards.js';
import FormValidator  from './scripts/components/FormValidator.js';
import Section from './scripts/components/Section.js';
import { UserInfo } from './scripts/components/UserInfo.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Api from './scripts/components/Api.js';
import { cohortId, headers } from './scripts/components/Api.js';

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
popupWithImage.setEventListeners();
//создаем новый экземпляр карточки
 const createCard = (item) => {
   const card = new Card(item, '#templateCard', () => {
     popupWithImage.open(item);
   } );
    return card.generateCard();
  } 

// создание нового элеменита карточки. Где мы из массива берем ссылку, название картинки и альт.
const section = new Section({
  renderer: (item) => {
    const card = createCard(item);
    section.addItem(card, 'append');
  },
}, placeList);


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
  handlerSubmit: (data) => {
    //вставил функцию path-запроса данных профиля
    editeUserDate(nameInput.value, jobInput.value);
    userInfo.setUserInfo(data);
    popupProfile.close();
  }
});
popupProfile.setEventListeners();
//настройка формы добаления карточки
const popupAddCards = new PopupWithForm(popupAddCard, {
  handlerSubmit: (data) => {
    getNewCards(data.name, data.link)
    placeList.prepend(createCard(data));
    popupAddCards.close();
  }
});
popupAddCards.setEventListeners();
//слушатель при нажатии на создание профиля
profileButton.addEventListener('click', () => {
  validatorForProfile.resetValidationFromProfile()
 openProfilePopup()
});
// слушатель при нажатии на создание новой картинки
cardButton.addEventListener('click', () => {
  validatorForCard.resetValidation()
  popupAddCards.open()
});

// экземпляр класса валидации профиля
const validatorForProfile = new FormValidator(enableValidation, formProfile);
validatorForProfile.enebleValidation();

// экземпляр класса валидации карточек
const poupImage = document.querySelector('.popup__form_add-form');
const validatorForCard = new FormValidator(enableValidation, poupImage);
validatorForCard.enebleValidation();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//получили данные профиля и подставили в соответствующий раздел
fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/users/me`, headers)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    //имя
    profileName.textContent = data.name;
    //профессия
    profileJob.textContent = data.about;

  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
  // получаем данные о карточках
fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards`, headers)
  .then(res => res.json())
  .then((data) => {
    section.renderer(data);
    console.log(data)
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//отправляем измененные данные пользовотеля на сервер
function editeUserDate (name, about) {
  fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: 'f77a7956-a5a9-4ad6-a04a-920b557c7dfd',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(res => res.json())
    .then(date => console.log(date))
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function getNewCards(name, link) {
  fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards`, {
      method: 'POST', // нужно указать метод запроса
    headers: {
      authorization: 'f77a7956-a5a9-4ad6-a04a-920b557c7dfd',
      'Content-Type': 'application/json'
    },
      // тело запроса
      body: JSON.stringify({
        name: name,
        link: link
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((date) => {
        console.log(date.likes);
      })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//настраиваем лайки
export default function getLikes(likes) {
  fetch(`https://mesto.nomoreparties.co/v1/${cohortId}/cards`, {
    method: 'POST', // нужно указать метод запроса
    headers: {
      authorization: 'f77a7956-a5a9-4ad6-a04a-920b557c7dfd',
      'Content-Type': 'application/json'
    },
    // тело запроса
    body: JSON.stringify({
      likes: likes
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((date) => {
      console.log(date.likes);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
}


//getNewCards('rere', 'https://www.sunhome.ru/i/wallpaperscsc/54/rabochii-stol-oboi-koshki.orig.jpg');



//Получаение инфорации по карточкам
/*
Promise.all([
  api.getUserInfo()
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about, data._id)
      userInfo.setAvatar(data.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
  
    .catch((err) => {
      console.log(err);
    })
])
  .catch(error => console.log(error))
*/