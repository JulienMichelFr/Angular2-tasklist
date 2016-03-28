import {Component} from 'angular2/core';
import {TodoStore} from "../todostore/store";
import {TodoItem} from "../models/todoItem";
import TodoItemComponent from "../todoitem/todoItem.component";

@Component({
    selector: 'todolist',
    templateUrl: 'app/todolist/todolist.component.html',
    styleUrls: ['app/todolist/todolist.component.css'],
    directives: [TodoItemComponent]
})
export class TodolistComponent{

    todo = 'New Todo';
    store: TodoStore;
    todoList: TodoItem[];

    constructor(store: TodoStore) {
        this.store = store;
        this.todoList = this.store.items;
    }

    newTodo(): void {
        this.store.addItem(this.todo);
        this.todo = '';
    }

    removeItem(item: TodoModelItem): void {
        this.store.removeItem(item);
    }
}
