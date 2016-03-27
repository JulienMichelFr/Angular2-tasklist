export class Task {

    public id;
    public removed;

    constructor (
        public name: string,
        public done: boolean
    ) {
        this.id = Math.floor((Math.random() * 100) + 1);
        this.removed = false
    }
}