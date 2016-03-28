import {Component} from 'angular2/core';
import {TodoStore} from "../todostore/store";
import {TodoItem} from "../models/todoItem";
import TodoItemComponent from "../todoitem/todoItem.component";
import {ArraySortPipe} from "../pipes/sortTodo.pipe";
import Utils from "../utils/utils";

@Component({
    selector: 'todolist',
    templateUrl: 'app/todolist/todolist.component.html',
    styleUrls: ['app/todolist/todolist.component.css'],
    directives: [TodoItemComponent],
    pipes: [ArraySortPipe]
})
export class TodolistComponent{

    todo: String = 'New todo';
    store: TodoStore;
    todoList: TodoItem[];

    constructor(store: TodoStore) {
        this.store = store;
        this.todoList = this.store.items;
    }

    newTodo(): void {
        if (this.todo.length > 0) {
            this.store.addItem(this.todo);
            this.todo = '';
            this.sortList();
        }
    }

    removeItem(item: TodoItem): void {
        this.store.removeItem(item);
        this.sortList();
    }

    sortList() {
        Utils.ArraySort(this.todoList);
    }
}
