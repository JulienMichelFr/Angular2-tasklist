import {TodoItem} from '../models/todoItem';

export class TodoStore {
    items: TodoItem[];

    constructor() {
        this.items = [];
    }

    addItem(newItem: String) {
        this.items.push({
            text: newItem
        })
    }
}