export default class FormValidator {
  constructor(data, formElement) {
    this.formElement = formElement;
    this.data = data;
    this.errorName = this.formElement.querySelector('.popup__input-error-name');
    this.inputName = this.formElement.name;
    this.inputDescription = this.formElement.description;
    this.errorDescription = this.formElement.querySelector('.popup__input-error-description');
    this.buttonElement = this.formElement.querySelector(this.data.submitButtonSelector);
  }

  _shortTextErro = (element, erroText) => {
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
    if (!this.inputName.validity.valid) {
      return true
    } else if (!this.inputDescription.validity.valid) {
      return true
    }

  };

  _changeButtonSwitch = () => {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this.buttonElement.classList.remove(this.data.inactiveButtonClass);
      this.buttonElement.disbaled = false;
    }
  }

  enebleValidation = () => {
    this._disableSubmitUrl(this.inputDescription);
    this.inputName.addEventListener('input', () => {
      this._shortTextErro(this.inputName, this.errorName);
      this._changeButtonSwitch();
    });

    this.inputDescription.addEventListener('input', () => {
      this._shortTextErro(this.inputDescription, this.errorDescription);
      this._changeButtonSwitch();
    });
  }
//блокировка сабмита
  _disableSubmitButton = () => {
    this.buttonElement.classList.add(this.data.inactiveButtonClass);
    this.buttonElement.disbaled = true;
  }
  //блокировка при открытии если это форма с карточками
  _disableSubmitUrl = (element) => {
    if (element.type == 'url') {
      this._disableSubmitButton();
    }
  }
}