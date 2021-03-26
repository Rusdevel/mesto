
let profileButton = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
/*
let profileName = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let profileInfo = document.querySelector('.profile__info');
let saveButton = document.querySelector('.popup__button');
*/
let formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
    // Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
}

formElement.addEventListener('submit', formSubmitHandler);


function openPopup () {
    popup.classList.remove('popup_open');
}

function closePopup() {
    popup.classList.add('popup_open');
}

profileButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);


/*
function addProfileDate () {
    profileInfo.insertAdjacentHTML('beforeend', `<h1 class="profile__name">${profileName}</h1>
                    <button type="button" class="button profile__button"></button>
                    <p class="profile__job">${job}</p>`)
}
*/


