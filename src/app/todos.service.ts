import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];
  doneTodos: Todo[] = [];

  constructor() {}

  addTodo(task: Todo) {}

  checkTodo() {}

  removeTodo() {}
}
