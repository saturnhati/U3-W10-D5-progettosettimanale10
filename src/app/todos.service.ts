import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];
  doneTodos: Todo[] = [];

  constructor() {}

  addTodo(task: Todo) {
    this.todos.push(task);
  }

  checkTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    todo.completed = true;
    let task = todo;
    this.todos.splice(index, 1);
    this.doneTodos.push(task);
  }

  redoTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    todo.completed = false;
    let task = todo;
    this.doneTodos.splice(index, 1);
    this.todos.push(task);
  }

  removeTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  // ! ci ho provato ma non va... (però li salva sul localstorage)
  saveTodo() {
    let todosString = JSON.stringify(this.todos);
    localStorage.setItem('savedTodos', todosString);
  }

  loadTodo() {
    let todosString = localStorage.getItem('saveTodos');
    if (todosString !== null) {
      let todosParsed = JSON.parse(todosString);
      this.todos = todosParsed;
      console.log(todosParsed);
    }
  }
}
