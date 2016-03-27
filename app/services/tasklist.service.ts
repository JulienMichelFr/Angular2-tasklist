import {Injectable} from 'angular2/core';
import {TASKS} from '../mock-tasks';

@Injectable()
export class TasklistService {
    getAllTasks() {
        return Promise.resolve(TASKS);
    }
}