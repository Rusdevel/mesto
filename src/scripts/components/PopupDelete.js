import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(selectorElement, { submitHandler }) {
    super(selectorElement);
    this._submitHandler = submitHandler;
    this._submitButton = this.element.querySelector(".popup__button");
  }

  open(cardId, element) {
    super.open();
    this._cardId = cardId;
    this.сardElement = element;
  }

  deleteCard() {
    this.сardElement.remove();
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._cardId);
    });
  }
}
