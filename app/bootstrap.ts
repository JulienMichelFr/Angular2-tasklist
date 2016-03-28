import {bootstrap}    from 'angular2/platform/browser';
import {TodoStore} from './todostore/store';
import {TodolistComponent} from './todolist/todolist.component';

bootstrap(TodolistComponent, [TodoStore]);
