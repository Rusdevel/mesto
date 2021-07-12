import Popup from "./Popup.js";
export class PopupForProfile extends Popup {
    constructor(selectorElement, formSelector) {
        super(selectorElement);
        formSelector.addEventListener('submit', this._handleProfileFormSubmit);
        //Находим содержимое попапа профиля
        this.popupEditProfile = document.querySelector('.popup_type_edit-profile');
        const formEditProfle = this.popupEditProfile.querySelector('.popup__form');
        this.profileName = document.querySelector('.profile__name');
        this.profileJob = document.querySelector('.profile__job');
        this.nameInput = formEditProfle.querySelector('.popup__input_type_name');
        this.jobInput = formEditProfle.querySelector('.popup__input_type_job');
    }
    _handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    this.profileName.textContent = this.nameInput.value;
    this.profileJob.textContent = this.jobInput.value;
        this.popupEditProfile.classList.remove('popup_open');
}
//сделать через super
    openPopup = () => {
        this.nameInput.value = this.profileName.textContent;
        this.jobInput.value = this.profileJob.textContent;
        this.selectorElement.classList.add('popup_open');
        this._setEventListners();
    }
}