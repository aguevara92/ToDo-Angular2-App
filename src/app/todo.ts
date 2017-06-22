// This class is to define each To-do Task
// $ ng generate class Todo --spec
export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
