export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._container = containerSelector;
        this._renderer = renderer;
    }

    // рендер карточек (перебор массива с карточками)
    renderer() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }

//добовляем карточки в разметку
    addItem(element, toAppend) {
        this._container[toAppend](element);
    }
}