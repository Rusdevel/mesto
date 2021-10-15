import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorElement, {handlerSubmit}) {
        super(selectorElement);
        this._form = this.element.querySelector('.popup__form');
        this._handlerSubmit = handlerSubmit;
        this._popupButton = this.element.querySelector('.popup__button');
        
    }

    _getInputValues() {
        //берем данные из формы
        this._data = Object.fromEntries(new FormData(this._form));
        return this._data;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handlerSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._form.reset();
        this._popupButton.classList.add('popup__button_disabled');
        this._popupButton.disabled = true;
    }
}