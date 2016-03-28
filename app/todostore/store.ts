import {TodoItem} from '../models/todoItem';

export class TodoStore {
    items: TodoItem[];

    constructor() {
        this.items = [
            {
                text: 'Todo1'
            },
            {
                text: 'Todo1'
            },
            {
                text: 'Todo1'
            },
            {
                text: 'Todo1'
            },
        ];
    }

    addItem(newItem: String) {
        this.items.push( new TodoItem(newItem))
    }

    removeItem(item: TodoItem) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
}