import Popup from "./Popup.js";
export class PopupFormCard extends Popup {
    constructor(selectorElement, formSelector, addElement) {
        super(selectorElement);
        this._addElement = addElement;
        document.querySelector(formSelector).addEventListener('submit', this._handlerFormAddCardSubmit);
        this._popupAddCard = document.querySelector('.popup_type_edite-card');
        this._nameCard = this._popupAddCard.querySelector('.popup__input_type_edite-card-name');
        this._linkCard = this._popupAddCard.querySelector('.popup__input_type_edite-card-link');
    }
    //метод работает при нажатии на сабмит
    _handlerFormAddCardSubmit = (evt) => {
        evt.preventDefault();
        //берем данные из формы
        const data = Object.fromEntries(new FormData(evt.target));
        this._addElement(data);
        evt.target.reset();
        const poupImage = document.querySelector('.popup_type_edite-card');
        poupImage.classList.remove('popup_open');
    }

    openPopup = () => {
        this.selectorElement.classList.add('popup_open');
        this._setEventListners();
        this.disableSubmitButton();
        this._nameCard.textContent = '';
        this._linkCard.textContent = '';
    }    
    _closePopup = () => {
        this.selectorElement.classList.remove('popup_open');
        //если удалить обработчик по закрытию на esc, то этот обработчик вообще перестает работать
        document.removeEventListener('keydown', this._closePopupEsc);
        this._nameCard.value = '';
        this._linkCard.value = '';
}
}