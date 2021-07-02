import Popup from "./Popup.js";
export default class PopupImage extends Popup {
    constructor(selectorElement) {
        super(selectorElement);
        this.imagePopup = document.querySelector('.popup_type_image');
        this.pupupImageCard = this.imagePopup.querySelector('.popup__image');
        this.popupImageTitle = this.imagePopup.querySelector('.popup__image-title');
    }
    
    _closePopup = () => {
        this.pupupImageCard.src = '';
        this.selectorElement.classList.remove('popup_open');
    }
}