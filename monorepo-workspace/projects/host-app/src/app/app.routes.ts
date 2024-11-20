import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: TodoComponent,
    pathMatch: 'full',
  },
];
