export class TodoItem {

    text: String;
    done: boolean;

    constructor(text: String) {
        this.done = false;
        this.text = text;
    }
}