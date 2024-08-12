import { Component, inject } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AddtaskComponent } from '../addtask/addtask.component';
import { EdittaskComponent } from '../edittask/edittask.component';
import { DeletetaskComponent } from '../deletetask/deletetask.component';
import User from '../types/user';
import { UserService } from '../service/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,MatDialogModule,ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  
  constructor(private _dialog: MatDialog){}
  navigateToAddTask(){
    this._dialog.open(AddtaskComponent);
  }
  navigateToEditTask(){
    this._dialog.open(EdittaskComponent);
  }
  navigateTodeleteTask(){
    this._dialog.open(DeletetaskComponent);
  }

  users: User[]=[];
  userService = inject(UserService);
  ngOnInit(){
    this.userService.getUsers().subscribe(result =>{
      this.users = result;
      console.log(this.users);
    });
  }
}
