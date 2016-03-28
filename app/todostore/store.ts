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

    removeItem(item: TodoItem) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
}