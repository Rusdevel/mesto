export default class Section {
    constructor({ renderer }, containerSelector) {
        this._container = containerSelector;
        this._renderer = renderer;
    }

    // рендер карточек (перебор массива с карточками)
    renderer(data) {
        data.forEach((item) => {
            this._renderer(item);
        });
    }

//добовляем карточки в разметку
    addItem(element, toAppend) {
        this._container[toAppend](element);
    }
}