import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handlerSubmit}) {
        super(popupSelector);
        this._form = this.element.querySelector('.popup__content');
        this._handlerSubmit = handlerSubmit;
    }

    _getInputValues() {
        //берем данные из формы
        this._data = Object.fromEntries(new FormData(evt.target));
        return this._data;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {evt.preventDefault();
            this._handlerSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}