import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {User} from "../user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  firstName:string='';
  email:string='';


  constructor(private userService:UserService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'firstName' : [null, Validators.required],
      'email': [null, Validators.email],

    });
  }

  onFormSubmit(form:User) {
    this.userService.createUser(form).subscribe(res=> {
      console.log('res=', res);
    }, err => {
      console.log('err', err);
    });
  }
}
