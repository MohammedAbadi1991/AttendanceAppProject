import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // user = new BehaviorSubject<User>(null);

  // constructor(private httpClient: HttpClient, private routher: Router) { }

  // login(userName: string, password: string) {
  //   return this.httpClient
  //     .post<AuthResponseData>(
  //       'http://localhost:4200/Users/Authenticate',
  //       {
  //         userName,
  //         password
  //       }
  //     )
  //     .pipe(
  //       catchError(errorRes => {
  //         return throwError(errorRes);
  //       }),
  //       tap(resData => {
  //         const user = new User(resData.Id, resData.UserName, resData.Token);
  //         this.user.next(user);
  //       }
  //       ));
  // }
}

// export interface AuthResponseData {
//   UserName: string;
//   Token: string;
//   Id: string;
// }

// export class User {
//   constructor(
//     public id: string,
//     public userName: string,
//     private _token: string,
//   ) {}

//   get token() {
//     return this._token;
//   }
// }
