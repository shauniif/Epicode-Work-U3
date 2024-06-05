import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { iUser } from '../Models/i-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iAuthData } from '../Models/i-auth-data';
import { iAuthResponse } from '../Models/i-auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  jswHelper:JwtHelperService = new JwtHelperService();
  authSubject = new BehaviorSubject<null|iUser>(null)
  user$ = this.authSubject.asObservable();

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  loginUrl:string = "http://localhost:3000/login";
  registerUrl:string = "http://localhost:3000/register";

  register(newUser:Partial<iUser>):Observable<iAuthResponse> {
    return this.http.post<iAuthResponse>(this.registerUrl, newUser);
  }

  login(authData:iAuthData):Observable<iAuthResponse> {
    return this.http.post<iAuthResponse>(this.loginUrl, authData)
    .pipe(tap(obj => {

      this.authSubject.next(obj.user)
      localStorage.setItem('accessObj', JSON.stringify(obj))
    }

    ))
  }

}
