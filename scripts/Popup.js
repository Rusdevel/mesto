export default class Popup {
    constructor(selectorElement) {
        this.selectorElement = selectorElement;
        //this.element = document.querySelector(selectorElement);
        this._popupAddCard = document.querySelector('.popup_type_edite-card');
        this._popupButton = this._popupAddCard.querySelector('.popup__button');
    }
    setEventListners = () => {
        const closeBtn = this.selectorElement.querySelector('.popup__close');
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._closePopupsOverlay);
        closeBtn.addEventListener('click', this.close);
    }
    close = () => {
        this.selectorElement.classList.remove('popup_open');
        //если удалить обработчик по закрытию на esc, то этот обработчик вообще перестает работать
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close()
        }
    }
    _closePopupsOverlay = (evt) => {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }
    openPopup = () => {
        this.selectorElement.classList.add('popup_open');
        this.setEventListners();
    }
}