export class TodoItem {

    _text: String;

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    constructor(text: String) {
        this._text = text;
    }
}