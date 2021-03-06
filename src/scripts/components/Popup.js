export default class Popup {
    constructor(selectorElement) {
        this.selectorElement = selectorElement;
        this.element = document.querySelector(this.selectorElement);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._submitButton = this.element.querySelector('.popup__button');
    }
    setEventListeners () {
        const closeBtn = this.element.querySelector('.popup__close');
        document.addEventListener('click', this._closePopupsOverlay);
        closeBtn.addEventListener('click', () => {this.close()});
       
    }

    close() {
        this.element.classList.remove('popup_open');
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

    renderLoading = (isLoading) => {
        if(isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = 'Сохранить';
        }
        

    }
}
