import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { DeletetaskComponent } from './deletetask/deletetask.component';

export const routes: Routes = [
    {
        path:"todolist",
        component:TodolistComponent,
    },
    
    
];
