import { Pipe } from "angular2/core";
import {TodoItem} from "../models/todoItem";
import Utils from "../utils/utils";

@Pipe({
    name: "sort"
})
export class ArraySortPipe {
    transform(array: Array<TodoItem>, args: string): Array<TodoItem> {
        Utils.ArraySort(array);
        return array;
    }
}