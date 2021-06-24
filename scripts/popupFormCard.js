import Popup from "./Popup.js";
export class PopupFormCard extends Popup {
    constructor(selectorElement, formSelector, addElement) {
        super(selectorElement);
        this._addElement = addElement;
        document.querySelector(formSelector).addEventListener('submit', this._handlerFormAddCardSubmit);
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
        /*popupButton.classList.add('popup__button_disabled');
        popupButton.setAttribute('disabled', 'disabled');*/ 
    }
}