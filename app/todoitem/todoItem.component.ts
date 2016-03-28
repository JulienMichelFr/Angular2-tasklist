import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TodoItem as TodoItemModel} from './../models/todoItem'

@Component({
    selector: 'todo-item',
    templateUrl: 'app/todoitem/todoItem.component.html',
    styleUrls: ['app/todoitem/todoItem.component.css']
})

export default class TodoItemComponent {
    @Input()
    item: TodoItemModel;

    @Output()
    done = new EventEmitter();

    doneClicked() {
        this.done.next(this.item);
    }
}