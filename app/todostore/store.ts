import {TodoItem} from '../models/todoItem';

export class TodoStore {
    items: TodoItem[];

    constructor() {
        try {
            this.items = JSON.parse(localStorage.getItem('todolist'));
        } catch (exception) {
            console.error(exception);
            this.items = [];
        }
    }

    addItem(newItem: String) {
        this.items.push( new TodoItem(newItem));
        this.updateLocalStorage()
    }

    removeItem(item: TodoItem) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        try {
            let data = JSON.stringify(this.items);
            localStorage.setItem('todolist', data);
        } catch (exception) {
            console.error(exception);
        }
    }

}