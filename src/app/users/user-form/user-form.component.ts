import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from "../user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEdit:boolean = false;
  isMessageVisible:boolean = false;
  userId:string = '';
  firstName:string='';
  lastName:string='';
  email:string='';
  occupation:string='';
  dateOfBirth:Date;

  constructor(private router: Router, private route: ActivatedRoute, private userService:UserService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
    this.userForm = this.formBuilder.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email': [null, [Validators.email, Validators.required]],
      'occupation' : [null, Validators.required],
      'dateOfBirth' : [null, Validators.required]
    });
  }

  getUser(id:string) {
    if(id) {
      this.userId = id;
      this.isEdit = true;
      this.userService.getUser(id).subscribe(data => {
        this.userForm.setValue({
          firstName: data.firstName ? data.firstName : '',
          lastName: data.lastName ? data.lastName : '',
          email: data.email ? data.email : '',
          occupation: data.occupation ? data.occupation : '',
          dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : '',
        });
      });
    }
  }

  onFormSubmit(user:User) {
    if (this.isEdit) {
      user._id = this.userId;
      this.userService.updateUser(user).subscribe(res => {
        this.isMessageVisible = true;
      });
    } else {
      this.userService.createUser(user).subscribe(res => {
        this.router.navigate(['/users']);
      });
    }
  }
}
