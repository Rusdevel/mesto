export default class FormValidator {
  constructor(data, formElement) {
    this.formElement = formElement;
    this.data = data;
    this.inputList = Array.from(this.formElement.querySelectorAll (this.data.inputSelector)); 
    this.buttonElement = this.formElement.querySelector(this.data.submitButtonSelector);
  }

  _shortTextError = (element) => {
    this.erroText = this.formElement.querySelector(`#${element.id}-error`);
    if (element.validity.valueMissing) {
      // выводит сообщение об ошибке
      this.erroText.textContent = this.data.errorMessageNullInput;
      // делает ошибку видимой
      this.erroText.classList.add(this.data.errorClass)
      //добавляет красную строку под инпут
      element.classList.add(this.data.inputErrorClass);
      return false
    } else if (element.validity.tooShort || element.validity.tooLong) {
      // выводит сообщение об ошибке
      this.erroText.textContent = this.data.wrongLenght;
      // делает ошибку видимой
      this.erroText.classList.add(this.data.errorClass)
      //добавляет красную строку под инпут
      element.classList.add(this.data.inputErrorClass);
      return false
      //проверяет введен ли адрес сайта
    } else if (element.type == 'url' && !element.validity.valid) {
      this.erroText.textContent = this.data.errorMessageNullLink;
      element.classList.add(this.data.inputErrorClass);
      this.erroText.classList.add(this.data.errorClass)
      return false
    }
    else {
      this.erroText.textContent = '';
      this.erroText.classList.remove(this.data.errorClass);
      element.classList.remove(this.data.inputErrorClass);
    }
  }
//сбрасываем валидацию
  resetValidation = () => {
    this.inputList.forEach((item) => {
      //убираем результаты валидации
      let erroText = this.formElement.querySelector(`#${item.id}-error`);
      erroText.textContent = '';
      erroText.classList.remove(this.data.errorClass);
      item.classList.remove(this.data.inputErrorClass);
      //блокируем сабмит
      this._disableSubmitButton();
    })
  }
  /*если удалить имя в профиле и выйти(без сабмита), а потом снова зайти, то имя будет старое,однако высветится ошибка и кнопка будет не активна,
  что бы это избежать создам метод resetValidationFromProfile*/
  resetValidationFromProfile = () => {
    this.inputList.forEach((item) => {
      let erroText = this.formElement.querySelector(`#${item.id}-error`);
      //убираем результаты валидации
      erroText.textContent = '';
      erroText.classList.remove(this.data.errorClass);
      item.classList.remove(this.data.inputErrorClass);
      //оставляем сабмит активным
      this.buttonElement.classList.remove(this.data.inactiveButtonClass);
      this.buttonElement.disabled = false;
  })
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
  
}