import "../pages/index.css";
import Card from "../scripts/components/Card.js";
import { enableValidation } from "../scripts/utils/validateConfig.js";
import { initialCards } from "../scripts/utils/initialCards.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Api from "../scripts/components/Api.js";
import { cohortId, headers } from "../scripts/components/Api.js";
import PopupDelete from "../scripts/components/PopupDelete";
//import PopupDelete from './scripts/components/PopupDelete';
const poupImage = document.querySelector(".popup__form_add-form");
const profileButton = document.querySelector(".profile__button");
const cardButton = document.querySelector(".profile__edit-button");
const popupAddCard = ".popup_type_edite-card";
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const formProfile = document.querySelector(".popup__form_profile");
const avatarUpdateButton = document.querySelector(".profile__avatar-button");
const popupAvatar = document.querySelector(".popup__form_avatar");
// Находим форму
const formEditProfle = popupEditProfile.querySelector(".popup__form");
// попап карточки
const imagePopup = document.querySelector(".popup_type_image");
// элемент списка карточек
const placeList = document.querySelector(".places-list");
const nameInput = formEditProfle.querySelector(".popup__input_type_name");
const jobInput = formEditProfle.querySelector(".popup__input_type_job");

// экземпляр класса валидации профиля
const validatorForProfile = new FormValidator(enableValidation, formProfile);
// экземпляр класса валидации карточек
const validatorForCard = new FormValidator(enableValidation, poupImage);
// экземпляр класса валидации аватарки
const validatorForAvatar = new FormValidator(enableValidation, popupAvatar);

//проверка валидации
validatorForProfile.enebleValidation();
validatorForCard.enebleValidation();
validatorForAvatar.enebleValidation();

const api = new Api({
  url: `https://mesto.nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: "f77a7956-a5a9-4ad6-a04a-920b557c7dfd",
    "Content-Type": "application/json",
  },
});

//Функция открытия попапа редактирования
function openProfilePopup() {
  const getProfileData = userInfo.getUserInfo();
  nameInput.value = getProfileData.name;
  jobInput.value = getProfileData.jobName;
  popupProfile.open();
}

//настройки формы профиля
const popupProfile = new PopupWithForm(".popup_type_edit-profile", {
  handlerSubmit: (data) => {
    //вставил функцию path-запроса данных профиля
    api
      .editeUserDate(nameInput.value, jobInput.value)
      .then((res) => {
        userInfo.setUserInfo(res.name, res.about);
        popupProfile.close();
        //userInfo.setUserInfo(data);
      })
      .finally(() => {
        popupProfile.renderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

//обновление аватара
const popupUpdateAvatar = new PopupWithForm(".popup_type_update-avatar", {
  handlerSubmit: ({ link }) => {
    api
      .updateAvatar(link)
      .then(({ res }) => {
        userInfo.setAvatar(link);
        popupUpdateAvatar.close();
      })
      .finally(() => {
        popupUpdateAvatar.renderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupUpdateAvatar.setEventListeners();
avatarUpdateButton.addEventListener("click", () => popupUpdateAvatar.open());

const popupDeleteQuestion = document.querySelector(".popup_type_delete-card");
//Попап удаления карточки
export const popupDelete = new PopupDelete(".popup_type_delete-card", {
  submitHandler: (cardId) => {
    api
      .cardDelete(cardId)
      .then((data) => {
        popupDelete.deleteCard();
        popupDelete.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupDelete.setEventListeners();

//эксземпляр класса попапа карточки
const popupWithImage = new PopupWithImage(".popup_type_image");
popupWithImage.setEventListeners();
//создаем новый экземпляр карточки
const createCard = (item) => {
  const userId = userInfo.getId();
  const card = new Card(
    item,
    {
      handleCardClick: (name, link) => {
        popupWithImage.open({ name, link });
      },
      handleCardDelete: (cardId, element) => {
        popupDelete.open(cardId, element);
      },
      handleCardLike: (cardId) => {
        api
          .setLike(cardId)
          .then(({ likes }) => {
            card.likes = likes;
            card.likeCard();
            card.updateLikeCount();
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handleCardDislike: (cardId) => {
        api
          .removeLike(cardId)
          .then(({ likes }) => {
            card.likes = likes;
            card.dislikeCard();
            card.updateLikeCount();
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    "#templateCard",
    userId
  );
  return card.generateCard();
};

// создание нового элеменита карточки. Где мы из массива берем ссылку, название картинки и альт.
const section = new Section(
  {
    renderer: (item) => {
      const card = createCard(item);
      section.addItem(card, "append");
    },
  },
  placeList
);

// Переменая для текста работы куда будет добавляться новый текст
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const avatar = document.querySelector(".profile__avatar");
const userInfo = new UserInfo(profileName, profileJob, avatar);

popupProfile.setEventListeners();

//настройка формы добаления карточки
const popupAddCards = new PopupWithForm(popupAddCard, {
  handlerSubmit: (data) => {
    api
      .getNewCards(data.name, data.link)
      .then((res) => {
        const element = createCard(res);
        section.addItem(element, "prepend");
        popupAddCards.close();
      })
      .finally(() => {
        popupAddCards.renderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    //placeList.prepend(createCard(data));
  },
});
popupAddCards.setEventListeners();

//слушатель при нажатии на создание профиля
profileButton.addEventListener("click", () => {
  validatorForProfile.resetValidationFromProfile();
  openProfilePopup();
});
// слушатель при нажатии на создание новой картинки
cardButton.addEventListener("click", () => {
  validatorForCard.resetValidation();
  popupAddCards.open();
});

//Получаение инфорации по карточкам
Promise.all([
  api
    .getUserInfo()
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about, data._id);
      userInfo.setAvatar(data.avatar);
    })
    .catch((err) => {
      console.log(err);
    }),
  api
    .getInitialCards()
    .then((data) => {
      section.renderer(data);
    })
    .catch((err) => {
      console.log("что то не так");
    }),
]).catch((error) => console.log(error));
