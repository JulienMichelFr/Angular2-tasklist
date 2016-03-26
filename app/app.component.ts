import {Component} from 'angular2/core';
import {NgForm, NgClass} from 'angular2/common';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    tasks = [
        {
            id: 1,
            title: 'Task1',
            done: true
        },
        {
            id: 2,
            title: 'Task2',
            done: true
        },
        {
            id: 3,
            title: 'Task3',
            done: false
        },
        {
            id: 4,
            title: 'Task4',
            done: false
        },
        {
            id: 5,
            title: 'Task5',
            done: false
        },
    ];
}
