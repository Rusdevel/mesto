// для просмотра фото
const imagePopup = document.querySelector(".popup_type_image");
const pupupImageCard = imagePopup.querySelector(".popup__image");
const popupImageTitle = imagePopup.querySelector(".popup__image-title");
//import popupDelete from '../../pages/../index.js';

export default class Card {
  constructor(
    { name, link, owner, _id, likes },
    { handleCardClick, handleCardDislike, handleCardLike, handleCardDelete },
    cardSelector,
    userId
  ) {
    this._name = name;
    this._link = link;
    this.likes = likes;
    this._owner = owner._id;
    this._id = _id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._openFullImage = handleCardClick;
    this._like = ".place-card__like-img";
    this._trash = ".place-card__trash";
    this._image = ".place-card__image";
    this._handleCardDislike = handleCardDislike;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDelete;
    this._element = this._getTemplateCard();
    this._cardLikeElement = this._element.querySelector(this._like);
  }

  _setEventListners() {
    this._element.querySelector(this._like).addEventListener("click", () => {
      const trigger = this._element
        .querySelector(this._like)
        .classList.contains("place-card__like-img_active");
      if (trigger) {
        this._handleCardDislike(this._id);
      } else {
        this._handleCardLike(this._id);
      }
    });

    this._element
      .querySelector(this._trash)
      .addEventListener("click", () =>
        this._handleCardDelete(this._id, this._element)
      );
    this._element
      .querySelector(this._image)
      .addEventListener("click", () =>
        this._openFullImage(this._name, this._link)
      );
  }

  _getTemplateCard() {
    //шаблон карточки
    const cardElement = document
      .querySelector(this._cardSelector) // используем this._cardSelector
      .content.querySelector(".place-card")
      .cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }

  likeCard() {
    this._element
      .querySelector(this._like)
      .classList.toggle("place-card__like-img_active");
  }

  dislikeCard() {
    this._element
      .querySelector(this._like)
      .classList.toggle("place-card__like-img_active");
  }
  // обновление количества лайков
  updateLikeCount() {
    this._element.querySelector(".place-card__like-info").textContent =
      this.likes.length;
  }

  /* _deleteCard(evt) {
    evt.target.closest('.place-card').remove();
}*/
  _handleOpenPopup() {
    pupupImageCard.src = this._link;
    popupImageTitle.textContent = this._name;
    openCardPopup();
  }
  /*
    _deleteCard(evt) {
       // evt.target.closest('.place-card').remove();
        this._handleCardDelete(this._id, this._element);
    }
*/
  generateCard() {
    //слушатели событий
    this._setEventListners();
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    //this._element = this._getTemplateCard();
    this.updateLikeCount();
    // создаем карточки с фото
    this._element.querySelector(".place-card__image").src = this._link;
    this._element.querySelector(".place-card__title").textContent = this._name;
    this._element.querySelector(".place-card__image").alt = this._name;

    if (this._userId === this._owner) {
      this._element
        .querySelector(this._trash)
        .classList.add("place-card__trash_active");
    }

    this.likes.forEach((like) => {
      if (like._id === this._userId) {
        this._element
          .querySelector(this._like)
          .classList.toggle("place-card__like-img_active");

        return;
      }
    });

    return this._element;
  }
}
