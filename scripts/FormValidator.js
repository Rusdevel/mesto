/*export default class FormValidator {
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
} */

export default class FormValidator {
  constructor (data, formElement) {
    this.formElement = formElement;
    this.data = data;
    this.inputList = Array.from(this.formElement.querySelectorAll (this.data.inputSelector));
    //для имени профиля
    this.erroName = this.formElement.querySelector(this.data.nameInputError);
    this.inputName = this.formElement.querySelector('.popup__input_type_name');
    //для работы профиля
    this.erroJob = this.formElement.querySelector(this.data.jobInputError);
    this.inputJob = this.formElement.querySelector('.popup__input_type_job');

    this.buttonElement = this.formElement.querySelector(this.data.submitButtonSelector);

    this.inputElement = this.formElement.querySelector(this.data.inputSelector)
    
    
  }
//метод вывода ошибки на короткий ввод
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
  }
  
  else {
    erroText.textContent = '';
    element.classList.remove(this.data.inputErrorClass);
    erroText.classList.remove(this.data.errorClass);
    return true
  }
}

_hasInvalidInput = () => {
   if(!this.inputName.validity.valid) {
     return true
   } else if(!this.inputJob.validity.valid) {
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
  
  this.inputName.addEventListener('input', () => {
      this._shortTextErro(this.inputName, this.erroName);
      this._changeButtonSwitch();
  });
  this.inputJob.addEventListener('input', () => {
      this._shortTextErro(this.inputJob, this.erroJob);
      this._changeButtonSwitch();
  });
  
}

}