import {TodoItem} from '../models/todoItem';

export class TodoStore {
    items: TodoItem[];

    constructor() {
        this.items = [];
        this.addItem('Todo1');
        this.addItem('Todo2');
        this.addItem('Todo3');
        this.addItem('Todo4');
        this.items[2].done = true;
    }

    addItem(newItem: String) {
        this.items.push( new TodoItem(newItem))
    }

    removeItem(item: TodoItem) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
}