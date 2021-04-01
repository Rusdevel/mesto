const profileButton = document.querySelector('.profile__button'); 
const popup = document.querySelector('.popup'); 
const closeButton = document.querySelector('.popup__close'); 
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job');
// Находим форму
const formElement = document.querySelector('.popup__form'); 
    // Находим поля формы в DOM 
let nameInput = formElement.querySelector('.popup__input_type_name'); 
let jobInput = formElement.querySelector('.popup__input_type_job'); 

 // Функция отправки формы
function formSubmitHandler(evt) { 
    evt.preventDefault();  
    profileName.textContent = nameInput.value; 
    profileJob.textContent = jobInput.value;
// Закрываем попап посли отправки формы
    closePopup();
} 
 // Обработчик события на отправку формы
formElement.addEventListener('submit', formSubmitHandler); 
 
 // Функия открытия попапа
function openPopup () { 
    popup.classList.add('popup_open'); 
    nameInput.value = profileName.textContent; 
    jobInput.value = profileJob.textContent;
} 
 // Функия закрытия попапа
function closePopup() { 
    popup.classList.remove('popup_open'); 
} 
 // Обработчик события на открытие попапа
profileButton.addEventListener('click', openPopup); 
 // Обработчик события на закрытие попапа
closeButton.addEventListener('click', closePopup);