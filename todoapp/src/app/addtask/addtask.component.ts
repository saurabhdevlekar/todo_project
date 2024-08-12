import { Component,inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import User from '../types/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  formBuilder=inject(FormBuilder);
  userForm :FormGroup=this.formBuilder.group({
    AssignedTo:[''],
    Status:[''],
    DueDate:[''],
    Priority:[''],
    Comments:[''],

  });
  userService=inject(UserService);
  router=inject(Router)
   addUser(){
    if(this.userForm.invalid){
      alert("Please provide all field with valid data");
      return;
    }
    const model:User=this.userForm.value;
    this.userService.addUser(model).subscribe(result=>{
       alert("Task added sucessfully")
       this.router.navigateByUrl("/")
    })
  } 
}

