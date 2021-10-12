import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
    constructor(selectorElement, { submitHandler }) {
        super(selectorElement);
        this._submitHandler = submitHandler;
    }

    open(cardId, element) {
        super.open();
        this._cardId = cardId;
        this.cardElement = element;
    }

    setEventListeners() {
        super.setEventListeners();
        this.element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._cardId);
        })
    }

}