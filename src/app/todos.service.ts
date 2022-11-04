import { provideImageKitLoader } from '@angular/common';
import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'prova prova prova',
      completed: false,
    },
  ];
  doneTodos: Todo[] = [];

  constructor() {}

  addTodo(task: Todo) {
    this.todos.push(task);
  }

  checkTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    let task = todo;
    this.todos.splice(index, 1);
    this.doneTodos.push(task);
  }

  redoTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    let task = todo;
    this.doneTodos.splice(index, 1);
    this.todos.push(task);
  }

  removeTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
