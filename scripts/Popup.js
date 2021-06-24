export default class Popup {
    constructor(selectorElement) {
        this.selectorElement = selectorElement;
    }
    _setEventListners = () => {
        const closeBtn = this.selectorElement.querySelector('.popup__close');
        const cardButtonProfile = document.querySelector('.profile__edit-button');
        document.addEventListener('keydown', this._closePopupEsc);
        document.addEventListener('click', this._closePopupsOverlay);
        closeBtn.addEventListener('click', this._closePopup);
    }
    _closePopup = () => {
        this.selectorElement.classList.remove('popup_open');
    }
    _closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
            this._closePopup()
        }
    }
    _closePopupsOverlay = (evt) => {
        if (evt.target.classList.contains('popup')) {
            this._closePopup();
        }
    }
    openPopup = () => {
        this.selectorElement.classList.add('popup_open');
        this._setEventListners();
    }

}