import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Todo } from 'src/app/classes/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  todos: Todo[] = this.todosService.todos;

  ngOnInit(): void {}

  removeTodo(todo: Todo) {
    this.todosService.removeTodo(todo);
  }

  completeTodo(todo: Todo) {
    this.todosService.checkTodo(todo);
  }
}
