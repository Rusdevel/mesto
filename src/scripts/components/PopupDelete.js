import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
    constructor(selectorElement, { submitHandler }) {
        super(selectorElement);
        this._submitHandler = submitHandler;
        this._submitButton = this.element.querySelector('.popup__button');
    }

    open(cardId, element) {
        super.open();
        this._cardId = cardId;
        this.CardElement = element;
    }

    _deleteCard() {
        this.CardElement.remove();
        console.log(this.CardElement);
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            console.log('рфботает')
            this._submitHandler(this._cardId);
            this._deleteCard()
            this.close();
        })
    }

}