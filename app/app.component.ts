import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {Task} from "./models/task";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [FORM_DIRECTIVES]
})
export class AppComponent {

    tasks = [
        {
            id: 1,
            name: 'Task1',
            done: true
        },
        {
            id: 2,
            name: 'Task2',
            done: true
        },
        {
            id: 3,
            name: 'Task3',
            done: false
        },
        {
            id: 4,
            name: 'Task4',
            done: false
        },
        {
            id: 5,
            name: 'Task5',
            done: false
        },
    ];

    model = new Task('New task', false);
    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
        this.tasks.push(this.model);
        this.model = new Task('', false)
    }
}
