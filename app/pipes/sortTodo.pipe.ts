import { Pipe } from "angular2/core";
import {TodoItem} from "../models/todoItem";

@Pipe({
    name: "sort"
})
export class ArraySortPipe {
    transform(array: Array<TodoItem>, args: string): Array<TodoItem> {
        array.sort((a: any, b: any) => {
            if (a.done && b.done) {
                return 0;
            } else if (a.done && !b.done) {
                return 1;
            } else if (!a.done && b.done) {
                return -1;
            } else if (!a.done && !b.done) {
                return 0
            }
        });
        return array;
    }
}