import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodosService } from '../todos.service';

@Component({
  templateUrl: './completati.page.html',
  styleUrls: ['./completati.page.scss'],
})
export class CompletatiPage implements OnInit {
  constructor(private todosService: TodosService) {}

  doneTodos: Todo[] = this.todosService.doneTodos;

  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  redoTodo(todo: Todo) {
    this.todosService.redoTodo(todo);
  }
}
