export class Task {

    public id;

    constructor (
        public name: string,
        public done: boolean
    ) {
        this.id = Math.floor((Math.random() * 100) + 1);
    }
}