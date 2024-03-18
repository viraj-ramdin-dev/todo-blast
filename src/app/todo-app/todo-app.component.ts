import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SignupComponent } from '../signup/signup.component';

@Component({
    selector: 'app-todo-app',
    standalone: true,
    templateUrl: './todo-app.component.html',
    styleUrl: './todo-app.component.css',
    imports: [TodoListComponent, HeaderComponent, FooterComponent]
})
export class TodoAppComponent {

}
