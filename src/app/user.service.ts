import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getRandomUser(): Observable<User[]> {
    return this.http.get<User[]>('assets/users.json');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/users.json');
  }
}
