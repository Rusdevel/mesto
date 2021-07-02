export default class FormValidator {
    constructor (data, formElement) {
        this.data = data;
        this.formElement = formElement;
        this.inputElement = this.formElement.querySelector(this.data.inputSelector);
        this.errorElement = this.formElement.querySelector(`#${this.inputElement.id}-error`);
        this.inputList = Array.from(this.formElement.querySelectorAll (this.data.inputSelector));
        this.buttonElement = this.formElement.querySelector(this.data.submitButtonSelector);
    }
    //показывает элемент ошибки
  _showInputError = () => {
    this.inputElement.classList.add(this.data.inputErrorClass);
    this._setError()
    this.errorElement.classList.add(this.data.errorClass);
  };
//скрывает элемент ошибки
  _hideInputError = () => {
    this.inputElement.classList.remove(this.data.inputErrorClass);
    this.errorElement.classList.remove(this.data.errorClass);
    this.errorElement.textContent = '';
  };
// проверяет валидность поля
  _isValid = () => {
    if (!this.inputElement.validity.valid) {
        this._showInputError();
    } else {
      this._hideInputError();
    }
  };

  _changeButtonSwitch = () => {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this.buttonElement.classList.remove(this.data.inactiveButtonClass);
      this.buttonElement.disbaled = false;
    }
  }

  _setEventListeners = () => {
    this.inputList.forEach((a) => {
      a.addEventListener('input',  () => {
        this._isValid();
        this._changeButtonSwitch();
      });
    });
  }; 

  enableForm = () => {
    this._setEventListeners();
    
    this.inputList.forEach(() => {
      this.formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });  
      this._setEventListeners();
      
    });    
  };

  _hasInvalidInput = () => {
    return this.inputList.some(() => {
      return !this.inputElement.validity.valid;
    }); 
  };

  _setError = () => {
    if (this.inputElement.type === 'url') {
      this.errorElement.textContent = this.data.errorMessageNullLink;
    } else !this.inputElement.value.length > 0 ? this.errorElement.textContent = this.data.errorMessageNullInput : this.errorElement.textContent = this.inputElement.validationMessage;
  }

  disableSubmitButton = () => {
    this.buttonElement.classList.add(this.data.inactiveButtonClass);
    this.buttonElement.disbaled = true;
  } 
}