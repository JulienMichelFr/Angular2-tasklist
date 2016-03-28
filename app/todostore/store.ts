import {TodoItem} from '../models/todoItem';

export class TodoStore {
    items: TodoItem[];

    constructor() {
        this.items = [];
    }

    addItem(newItem: String) {
        console.log(newItem);
        this.items.push({
            text: newItem
        })
    }
}