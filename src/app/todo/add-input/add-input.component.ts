import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss'],
})
export class AddInputComponent implements OnInit {
  title: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  addTodo() {
    let task: Todo = new Todo(this.title);
    this.todosService.addTodo(task);
    this.title = '';
  }
}
