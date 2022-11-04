import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPage } from './todo/todo.page';
import { CompletatiPage } from './completati/completati.page';

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    CompletatiPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
