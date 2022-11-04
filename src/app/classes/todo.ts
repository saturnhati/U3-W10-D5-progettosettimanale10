import { Task } from '../interfaces/task.interface';

export class Todo implements Task {
  title: string;
  completed: boolean;
  constructor(title: string) {
    this.title = title;
    this.completed = false;
  }
}
