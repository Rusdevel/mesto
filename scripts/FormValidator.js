export default class FormValidator {
  constructor(data, formElement) {
    this.formElement = formElement;
    this.data = data;
    this.inputList = Array.from(this.formElement.querySelectorAll (this.data.inputSelector)); 
    this.buttonElement = this.formElement.querySelector(this.data.submitButtonSelector);
  }

  _shortTextError = (element) => {
    const erroText = this.formElement.querySelector(`#${element.id}-error`);
    if (element.validity.valueMissing) {
      // выводит сообщение об ошибке
      erroText.textContent = this.data.errorMessageNullInput;
      // делает ошибку видимой
      erroText.classList.add(this.data.errorClass)
      //добавляет красную строку под инпут
      element.classList.add(this.data.inputErrorClass);
      return false
    } else if (element.validity.tooShort || element.validity.tooLong) {
      // выводит сообщение об ошибке
      erroText.textContent = this.data.wrongLenght;
      // делает ошибку видимой
      erroText.classList.add(this.data.errorClass)
      //добавляет красную строку под инпут
      element.classList.add(this.data.inputErrorClass);
      return false
      //проверяет введен ли адрес сайта
    } else if (element.type == 'url' && !element.validity.valid) {
      erroText.textContent = this.data.errorMessageNullLink;
      element.classList.add(this.data.inputErrorClass);
      erroText.classList.add(this.data.errorClass)
      return false
    }
    else {
      erroText.textContent = '';
      erroText.classList.remove(this.data.errorClass);
      element.classList.remove(this.data.inputErrorClass);
    }
  }

  _hasInvalidInput = () => {
    return this.inputList.some((item) => { 
      return !item.validity.valid; 
    });  
      };
   
  _changeButtonSwitch = () => {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this.buttonElement.classList.remove(this.data.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  }

  enebleValidation = () => {
    this.inputList.forEach((item) => {
      this._disableSubmitUrl(item);
      item.addEventListener('input', () => {
      this._shortTextError(item);
      this._changeButtonSwitch();
    })
    
    });
  }
//блокировка сабмита
  _disableSubmitButton = () => {
    this.buttonElement.classList.add(this.data.inactiveButtonClass);
    this.buttonElement.disabled = true;
  }
  //блокировка при открытии если это форма с карточками
  _disableSubmitUrl = (element) => {
    if (element.type == 'url') {
      this._disableSubmitButton();
    }
  }
}