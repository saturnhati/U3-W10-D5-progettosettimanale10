import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss'],
})
export class AddInputComponent implements OnInit {
  task?: Todo = new Todo();

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  addTodo(task: Todo) {
    this.todosService.addTodo(task);
  }
}
