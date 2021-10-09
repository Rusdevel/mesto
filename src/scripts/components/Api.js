//Идентификатор группы
export const cohortId = 'cohort-28';
//Токен
export const headers = {
    headers: {
        authorization: 'f77a7956-a5a9-4ad6-a04a-920b557c7dfd',
    }
}
export default  class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.url;
    }
// Получаем информацию о пользователе
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
            .then(this._checkRes)
    }


    getInitialCards() {
        // ...
    }
// проверяем приняли ли запрос
    _checkRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    // другие методы работы с API
}