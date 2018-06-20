import { User } from "./user";
import { Observable } from "rxjs/index";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/internal/operators";
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  apiUrl:string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(map((response:any)  => {
      return response['data'] as User[];
    }));
  }

  getUser(userId:string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`).pipe(
      map((response:any) => {
        return response['data'][0] as User;
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user._id}`, user);
  }

  removeUser(userId:string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/users/${userId}`);
  }

  uploadUserPicture(formData:FormData) {

  }
}
