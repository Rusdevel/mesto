import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(data, selectorElement) {
        super(selectorElement);
        this._pupupImageCard = this.element.querySelector(".popup__image");
        this._popupImageTitle = this.element.querySelector(".popup__caption");
        this._name = data.name;
        this._link = data.description;
    }

    open({ name, link }) {
        this._pupupImageCard.src = this._link;
        this._pupupImageCard.alt = this._name;
        this._popupImageTitle.textContent = this._name;
        super.openPopup();
    }
}