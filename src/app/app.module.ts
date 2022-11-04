import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPage } from './todo/todo.page';
import { CompletatiPage } from './completati/completati.page';
import { HeaderComponent } from './header/header.component';
import { AddInputComponent } from './todo/add-input/add-input.component';
import { TaskListComponent } from './todo/task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    CompletatiPage,
    HeaderComponent,
    AddInputComponent,
    TaskListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
