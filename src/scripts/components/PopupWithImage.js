import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selectorElement) {
        super(selectorElement);
        this._pupupImageCard = this.element.querySelector('.popup__image');
        this._popupImageTitle = this.element.querySelector('.popup__image-title');
    }

    open({ name, link }) {
        this._pupupImageCard.src = link;
        this._pupupImageCard.alt = name;
        this._popupImageTitle.textContent = name;
        super.open();
    }
}