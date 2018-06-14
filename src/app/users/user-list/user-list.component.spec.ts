import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import {User} from "../user";
import {Observable, of} from "rxjs/index";
import {UserService} from "../user.service";
import {By} from "@angular/platform-browser";


export class UserMockService {
  getUsers(): Observable<User[]> {
    return of([
      {firstName: 'John', lastName: 'Doe', email: 'john.doe@example.io', occupation:'developer', dateOfBirth: ''},
      {firstName: 'Steven', lastName: 'Doe', email: 'steven.doe@example.io', occupation:'developer', dateOfBirth: ''}
    ]);
  }
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [{provide: UserService, useClass:UserMockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 2 users', () => {
    console.log('user', fixture.debugElement.queryAll(By.css('app-user-list')));
  });
});
