import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selectorElement) {
        super(selectorElement);
        this._pupupImageCard = this.element.querySelector('.popup__image');
        this._popupImageTitle = this.element.querySelector('.popup__image-title');
    }

    open(date) {
        this._pupupImageCard.src = date.description;
        this._pupupImageCard.alt = date.name;
        this._popupImageTitle.textContent = date.name;
        super.open();
    }
}