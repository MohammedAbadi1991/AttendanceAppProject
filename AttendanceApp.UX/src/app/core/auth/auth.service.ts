import { Injectable } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = '';
  // tslint:disable-next-line: no-trailing-whitespace

  constructor(private router: Router, private http: HttpClient) {
    // console.log("I am in the constructor");
  }

  signinUser(email: string, password: string) {

    this.token = 'test';
    localStorage.setItem("user", email);
    localStorage.setItem("token", 'test');
    return of(this.token);

  }
  logout() {
    this.token = '';
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  isAuthenticated() {
    return localStorage.getItem("token") === 'test';
  }
}
