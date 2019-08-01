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
    return this.http
      .get<User[]>(`${API}/users`)
      .pipe(
        map(result => result)
      );
  }
}
