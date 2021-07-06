export default class FormValidatorCardPopup  {
    constructor (data, formElement) {
        this.formElement = formElement;
    this.data = data;
       
    this.inputList = Array.from(this.formElement.querySelectorAll (this.data.inputSelector));
    this.erroNameCard = this.formElement.querySelector(this.data.nameCardError);
    this.inputNameCard = this.formElement.querySelector('.popup__input_type_edite-card-name');

    this.inputUrlCard = this.formElement.querySelector('.popup__input_type_edite-card-link');
    this.erroLinkCard = this.formElement.querySelector(this.data.urlError);

    this.buttonElement = this.formElement.querySelector(this.data.submitButtonSelector);
    }

    _shortTextErro = (element, erroText) => {
  if(element.validity.valueMissing) {
    // выводит сообщение об ошибке
    erroText.textContent = this.data.errorMessageNullInput;
   // делает ошибку видимой
   erroText.classList.add(this.data.errorClass)
   //добавляет красную строку под инпут
   element.classList.add(this.data.inputErrorClass);
   return false
  }  else if (element.validity.tooShort || element.validity.tooLong) {
    // выводит сообщение об ошибке
    erroText.textContent = this.data.wrongLenght;
   // делает ошибку видимой
   erroText.classList.add(this.data.errorClass)
   //добавляет красную строку под инпут
   element.classList.add(this.data.inputErrorClass);
   return false
  } else if (!element.validity.valid) {
    erroText.textContent = this.data.errorMessageNullLink;
    element.classList.add(this.data.inputErrorClass);
    erroText.classList.add(this.data.errorClass)
  }else {
    erroText.textContent = '';
    erroText.classList.remove(this.data.errorClass);
    element.classList.remove(this.data.inputErrorClass);
  }
}

_hasInvalidInput = () => {
    if(!this.inputNameCard.validity.valid) {
      return true
    } else if(!this.inputUrlCard.validity.valid) {
      return true
    }
   
 };
 
 _changeButtonSwitch = () => {
   if (this._hasInvalidInput()) {
     this.buttonElement.classList.add(this.data.inactiveButtonClass);
     this.buttonElement.disbaled = true;
   } else {
     this.buttonElement.classList.remove(this.data.inactiveButtonClass);
       this.buttonElement.disbaled = false;
   }
 }

    setEventListner = () => {
        this.inputNameCard.addEventListener('input', () => {
      this._shortTextErro(this.inputNameCard, this.erroNameCard);
      this._changeButtonSwitch();
    }); 

    this.inputUrlCard.addEventListener('input', () => {
        this._shortTextErro(this.inputUrlCard, this.erroLinkCard);
        this._changeButtonSwitch();
      }); 
}
}