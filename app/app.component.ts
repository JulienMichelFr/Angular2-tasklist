import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {Task} from "./models/task";
import {TasklistService} from './services/tasklist.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [FORM_DIRECTIVES],
    providers: [TasklistService]
})
export class AppComponent implements OnInit{

    constructor(private _tasklistService: TasklistService){
    }

    tasks: Task[];

    finishedTasks: Task[] = [];
    notFinishedTasks: Task[] = [];

    model = new Task('New task', false);
    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
        this.tasks.push(this.model);
        this.model = new Task('', false)
    }

    remove(task: Task) {
        let index = this.tasks.indexOf(task)
        if (index > -1) {
            this.tasks.splice(index, 1)
        }
    }
    
    switch(task: Task) {

        console.log(task);
    }

    getTasks() {
        this._tasklistService.getAllTasks().then( (tasks) => {
            this.tasks = tasks;
            for (let task of this.tasks) {
                if (task.done) {
                    this.finishedTasks.push(task)
                } else {
                    this.notFinishedTasks.push(task)
                }
            }
        });
    }

    ngOnInit() {
        this.getTasks();
    }
}
