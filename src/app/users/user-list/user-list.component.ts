import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";
import {DatatableComponent} from "@swimlane/ngx-datatable";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  rows: User[] = [];
  loadingIndicator: boolean;

  columns = [
    { prop: '_id', name: 'Id'},
    { prop: 'firstName', name: 'First Name' },
    { prop: 'lastName', name: 'Last Name' },
    { prop: 'email', name: 'Email' },
    { prop: 'occupation', name: 'Occupation' },
    { prop: 'dateOfBirth', name: 'Date of birth'}
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loadingIndicator = true;
    this.userService.getUsers()
      .subscribe((users) => {
        this.users = [...users];
        this.rows = users;
        this.loadingIndicator = false;
      });
  }

  removeUser(id:string) {
    this.userService.removeUser(id).subscribe(response => {
      this.fetchUsers();
    });
  }

  updateFilter(event) {
    const val:string = event.target.value.toLowerCase();
    // filter our data and update rows
    this.rows  = this.users.filter((user:User) => {
      for( let column of this.columns) {
        if(column.prop !== '_id') {
          if (user[column.prop].toLowerCase().indexOf(val) !== -1 || !val) {
            return true;
          }
        }
      }
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
