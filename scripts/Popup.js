export default class Popup {
    constructor(selectorElement) {
        this.selectorElement = selectorElement;
        //this.element = document.querySelector(selectorElement);
        this._popupAddCard = document.querySelector('.popup_type_edite-card');
        this._popupButton = this._popupAddCard.querySelector('.popup__button');
    }
    _setEventListners = () => {
        const closeBtn = this.selectorElement.querySelector('.popup__close');
        document.addEventListener('keydown', this._closePopupEsc);
        document.addEventListener('click', this._closePopupsOverlay);
        closeBtn.addEventListener('click', this._closePopup);
    }
    _closePopup = () => {
        this.selectorElement.classList.remove('popup_open');
        //если удалить обработчик по закрытию на esc, то этот обработчик вообще перестает работать
        document.removeEventListener('keydown', this._closePopupEsc);
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