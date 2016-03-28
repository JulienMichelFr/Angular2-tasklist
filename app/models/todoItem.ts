export class TodoItem {

    _text: String;
    done: boolean;

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    constructor(text: String) {
        this.done = false;
        this._text = text;
    }
}