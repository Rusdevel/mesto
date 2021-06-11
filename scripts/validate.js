// включение валидации вызовом enableValidation
// все настройки передаются при вызове
export {enableValidation};

 const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible',
    errorMessageNullInput: 'Вы пропустили это поле.',
    errorMessageNullLink: 'Введите адрес сайта.',
    popupСontainerAdd: '.popup__container_add'
  };
  //показывает элемент ошибки
  const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(enableValidation.inputErrorClass);
    setError(formElement, inputElement, enableValidation)
    errorElement.classList.add(enableValidation.errorClass);
  };
//скрывает элемент ошибки
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(enableValidation.inputErrorClass);
    errorElement.classList.remove(enableValidation.errorClass);
    errorElement.textContent = '';
  };
// проверяет валидность поля
  const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  function changeButtonSwitch(inputList,buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(enableValidation.inactiveButtonClass); 
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(enableValidation.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

  const checkEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector));
    const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);
    changeButtonSwitch(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        isValid(formElement, inputElement);
        changeButtonSwitch(inputList, buttonElement);
      });
    });
  }; 

  const enableForm = (enableValidation) => {
    const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });  
      checkEventListeners(formElement);
    });     
  };

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    }); 
  };

  function setError(formElement, inputElement, enableValidation) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement.type === 'url') {
      errorElement.textContent = enableValidation.errorMessageNullLink;
    } else !inputElement.value.length > 0 ? errorElement.textContent = enableValidation.errorMessageNullInput : errorElement.textContent = inputElement.validationMessage;
  }
  enableForm(enableValidation);