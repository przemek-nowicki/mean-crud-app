import { User } from "./user";
import { Observable } from "rxjs/index";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/internal/operators";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users').pipe(map((res:any)  => {
      return res["data"].docs as User[];
    }));
  }
}
