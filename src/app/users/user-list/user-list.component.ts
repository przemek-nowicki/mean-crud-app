import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  errorMessage: string = '';

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers()
      .subscribe((users) => this.users = users);
  }

  removeUser(id:string) {
    this.userService.removeUser(id).subscribe(response => {
      this.fetchUsers();
    },errorResponse => {
      this.errorMessage = errorResponse.error.message;
    });
  }
}
