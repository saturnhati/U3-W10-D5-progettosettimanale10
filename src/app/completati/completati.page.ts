import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodosService } from '../todos.service';

@Component({
  templateUrl: './completati.page.html',
  styleUrls: ['./completati.page.scss'],
})
export class CompletatiPage implements OnInit {
  constructor(private todosService: TodosService) {}

  todos: Todo[] = this.todosService.doneTodos;

  ngOnInit(): void {}

  redoTodo(todo: Todo) {
    this.todosService.redoTodo(todo);
  }
}
