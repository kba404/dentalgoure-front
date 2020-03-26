import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.AUTH_API;
  }

  login(credentials): Observable<any> {
    return this.http.post(`${this.apiUrl}signin`, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(`${this.apiUrl}signup`, {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
