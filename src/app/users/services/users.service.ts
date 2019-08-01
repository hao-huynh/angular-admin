import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';

const API = 'http://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API}/users`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${API}/users/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${API}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${API}/users/${user.id}`, user);
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`${API}/users/${user.id}`);
  }
}
