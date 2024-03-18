import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

export const routes: Routes = [

  { path: '', redirectTo: '/signup', pathMatch: 'full' }, // Redirect root to todo
  { path: 'todo', component: TodoAppComponent },
  { path: 'todo/active', component: TodoAppComponent },
  { path: 'todo/completed', component: TodoAppComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/signup', pathMatch: 'full' },
];
