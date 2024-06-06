import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
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
  synLoggedIn:boolean = false;
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.synLoggedIn = user))
  constructor(
    private http:HttpClient,
    private router:Router
  ) {
    this.restoreUser();
  }

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

      this.autoLogout()
    }
    ))
  }
  logout():void{
    this.authSubject.next(null);
    localStorage.removeItem('accessObj');
    this.router.navigate(['/auth/login'])
  }

  autoLogout():void {
    const accessObj = this.getAccessObj();
    if(!accessObj) return
    const expDate = this.jswHelper.getTokenExpirationDate(accessObj.accessToken) as Date;
    const expMs = expDate.getTime() - expDate.getTime()
    setTimeout(this.logout, expMs)

  }

  getAccessObj():iAuthResponse |null {
    const accessaObjJson = localStorage.getItem('accessObj');
    if(!accessaObjJson) return null
    const accessObj:iAuthResponse = JSON.parse(accessaObjJson)
    return accessObj;
  }

  restoreUser():void {
    const accessObj = this.getAccessObj();
    if(!accessObj) return
    if(this.jswHelper.isTokenExpired(accessObj.accessToken)) return

    this.authSubject.next(accessObj.user)

    this.autoLogout()
  }
}
