import { initialCards } from './initialCards.js';
// для просмотра фото
const imagePopup = document.querySelector('.popup_type_image');
const popupContainer = imagePopup.querySelector('.popup__container');
const pupupImageCard = imagePopup.querySelector('.popup__image');
const closeBtnpopupImage = imagePopup.querySelector('.popup__close');
const popupImageTitle = imagePopup.querySelector('.popup__image-title');

export default class Card {
    constructor(data, cardSelector) {
        this._name = data.nameCard;
        this._link = data.url;
        this._cardSelector = cardSelector;
        this._like = '.place-card__like-img';
        this._trash = '.place-card__trash';
        this._image = '.place-card__image';
    }

    _setEventListners() {
        this._element.querySelector(this._like).addEventListener('click', this._likeCard);
        this._element.querySelector(this._trash).addEventListener('click', this._deleteCard);
        this._element.querySelector(this._image).addEventListener('click', () => {
            this._handleOpenPopup()
        });
        closeBtnpopupImage.addEventListener('click', () => {
            this._handleClosePopup()
        });
        document.addEventListener('keydown', this._closePopupEsc);

        //this._element.querySelector(this._image).addEventListener('click', () => this._openFullImage(this._name, this._link));

    }

    _getTemplateCard() {
        //шаблон карточки
        const cardElement = document
            .querySelector(this._cardSelector) // используем this._cardSelector
            .content
            .querySelector('.place-card')
            .cloneNode(true);

        // вернём DOM-элемент карточки
        return cardElement;
    }

    _likeCard(evt) {
    evt.target.classList.toggle('place-card__like-img_active');
}
    _deleteCard(evt) {
    evt.target.closest('.place-card').remove();
}

    _handleOpenPopup() {
        pupupImageCard.src = this._link;
        popupImageTitle.textContent = this._name;
        imagePopup.classList.add('popup_open');
    }

    _handleClosePopup() {
        pupupImageCard.src = '';
        imagePopup.classList.remove('popup_open');
    }

    _closePopupEsc(evt) {
        if (evt.key === 'Escape') {
            imagePopup.classList.remove('popup_open');
        }
    }
// Функция закрытие попапа через overlay
    _closePopupOverlay(evt) {
            if (evt.target.classList.contains('popup')) {
                const element = document.querySelector('.popup_open')
                imagePopup.classList.remove('popup_open');
            }
    }

    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplateCard();
        
        
        // создаем карточки с фото
        this._element.querySelector('.place-card__image').src = this._link;
        this._element.querySelector('.place-card__title').textContent = this._name;
        this._element.querySelector('.place-card__image').alt = this._name;
        //слушатели событий
        this._setEventListners();
        
        return this._element;
    }
    // отрисовываем карточки из массива на странице
}

