import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorElement, {handlerSubmit}) {
        super(selectorElement);
        this._form = this.element.querySelector('.popup__form');
        this._handlerSubmit = handlerSubmit;
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handlerSubmit(this._getInputValues());
        })
    }

    _getInputValues() {
        //берем данные из формы
        this._data = Object.fromEntries(new FormData(this._form));
        return this._data;
    };

    setEventListeners() {
        super.setEventListeners();
        
    }

    close() {
        super.close();
        this._form.reset();
    }
}