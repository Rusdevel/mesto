export default class Popup {
    constructor(selectorElement) {
        this.selectorElement = selectorElement;
        this.element = document.querySelector(this.selectorElement);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    setEventListners () {
        const closeBtn = this.element.querySelector('.popup__close');
        document.addEventListener('click', this._closePopupsOverlay);
        closeBtn.addEventListener('click', this.close);
    }

    close() {
        this.element.classList.remove('popup_open');
        //если удалить обработчик по закрытию на esc, то этот обработчик вообще перестает работать
        document.removeEventListener("keydown", this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    _closePopupsOverlay = (evt) => {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }
    open() {
        this.element.classList.add('popup_open');
        document.addEventListener("keydown", this._handleEscClose);
    }
}
