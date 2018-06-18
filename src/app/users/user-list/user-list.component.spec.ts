import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import {User} from "../user";
import {Observable, of} from "rxjs/index";
import {UserService} from "../user.service";
import {By} from "@angular/platform-browser";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {UsersRoutingModule} from "../users-routing.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

export class UserMockService {
  getUsers(): Observable<User[]> {
    return of([
      {firstName: 'John', lastName: 'Doe', email: 'john.doe@example.io', occupation:'developer', dateOfBirth: ''},
      {firstName: 'Steven', lastName: 'Doe', email: 'steven.doe@example.io', occupation:'developer', dateOfBirth: ''}
    ]);
  }
  removeUser(userId:string): Observable<{}> {
    return of();
  }
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, NgxDatatableModule, UsersRoutingModule],
      declarations: [ UserListComponent ],
      providers: [{provide: UserService, useClass: UserMockService}]
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

  it('should render number of 2 total users', () => {
    const totalRowNumber = fixture.debugElement.query(By.css('div.page-count')).nativeElement.textContent.trim();
    expect(totalRowNumber).toEqual('2 total');
  });
});
