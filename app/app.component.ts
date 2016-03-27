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

    deletedTasks: Task[] = [];
    finishedTasks: Task[] = [];
    notFinishedTasks: Task[] = [];


    model = new Task('New task', false);
    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
        this.tasks.push(this.model);
        this.notFinishedTasks.push(this.model);
        this.model = new Task('', false)
    }

    remove(task: Task) {
        task.removed = true;
        this.deletedTasks.push(task);
        this.removeFromArray(task, this.finishedTasks);
    }
    
    changeTaskStatus(task: Task) {
        if (task.done) {
            this.finishedTasks.push(task);
            this.removeFromArray(task, this.notFinishedTasks);
        } else {
            this.notFinishedTasks.push(task);
            this.removeFromArray(task, this.finishedTasks);
        }
    }

    getTasks() {
        this._tasklistService.getAllTasks().then( (tasks) => {
            this.tasks = tasks;
            for (let task of this.tasks) {
                if (task.done) {
                    this.finishedTasks.push(task);
                } else {
                    this.notFinishedTasks.push(task);
                }
            }
        });
    }

    removeFromArray(item, array) {
        let index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    restore(task) {
        task.removed = false;
        this.finishedTasks.push(task);
        this.removeFromArray(task, this.deletedTasks);
    }

    ngOnInit() {
        this.getTasks();
    }
}
