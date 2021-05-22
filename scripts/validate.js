  const  enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

  const profileForm = document.forms.profileForm;
  const profileNames = profileForm.name;
  const profileDescription = profileForm.description; 

  const cardForm = document.forms.cardForm;
  const cardName = cardForm.name;
  const cardUrl = cardForm.url; 

  const hideInputError = (element) => {
    element.classList.remove('popup__input_type_error');
  };
  
  //Функция, которая проверяет валидность поля
  const isValid = () => {
    if (!profileNames.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(profileNames);
    } else {
      // Если проходит, скроем
      hideInputError(profileNames);
    }
  };
  
  profileForm.addEventListener('submit', function (evt) {
    // Отменим стандартное поведение по сабмиту
    evt.preventDefault();
  });
  
  
  // Вызовем функцию isValid на каждый ввод символа
  profileNames.addEventListener('input', isValid); 
  /*
    showInputError — показывает элемент ошибки;
    hideInputError — скрывает элемент ошибки;
    isValid — проверяет валидность поля, внутри вызывает showInputError или hideInputError.
  */

  // Функция, которая добавляет класс с ошибкой
/*const showInputError = (popupElement, inputElement, errorMessage) => {
  
  inputElement.classList.add(enableValidation.inputErrorClass);
  isValid(popupElement, inputElement, enableValidation)
  errorElement.classList.add(enableValidation.errorClass);
};
showInputError(profileForm, profileNames);*/
const errorElement = profileForm.querySelector(`#${profileNames.id}-error`);
  console.log(errorElement);


// Функция, которая удаляет класс с ошибкой


  