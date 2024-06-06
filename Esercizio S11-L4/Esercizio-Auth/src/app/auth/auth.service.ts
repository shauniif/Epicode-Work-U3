import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iUser } from '../models/i-user';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iAuthData } from '../models/i-auth-data';
import { IAuthResponse } from '../models/i-auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
jwtHelper: JwtHelperService = new JwtHelperService();
authSubject = new BehaviorSubject<null|iUser>(null)
syncisLoggedIn:boolean = false;
user$ = this.authSubject.asObservable();
isLoggeIn$ = this.user$.pipe(
  map(user => !!user),
  tap(user => this.syncisLoggedIn =user)
)
  constructor( private http:HttpClient, private router: Router) {
    this.restoreUser();

  }


  loginUrl:string = 'http://localhost:3000/login';
  registerUrl:string = 'http://localhost:3000/register';
   register(newUser:Partial<iUser>):Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(this.registerUrl, newUser);
   }
   login(authData:iAuthData):Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(this.loginUrl, authData)
    .pipe(tap(data => {
      this.authSubject.next(data.user);
      localStorage.setItem('accessData', JSON.stringify(data));

      this.autoLogout()
    }));
   }
   logout():void {
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
   }
   autoLogout():void {
    const accessData = this.getAccessData();
    if(!accessData) return;
    const expDate= this.jwtHelper.getTokenExpirationDate(accessData.accessToken) as Date
    const expMs = expDate.getTime() - new Date().getTime();
    setTimeout(this.logout, expMs)
   }
   getAccessData():IAuthResponse|null {
    const accessDataJson = localStorage.getItem('accessData');
    if(!accessDataJson) return null
    const accessData:IAuthResponse = JSON.parse(accessDataJson);
    return accessData
   }

   restoreUser(): void {
    const accessData = this.getAccessData();
    if(!accessData) return;
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.autoLogout();
   }
}
