import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard {
  constructor(private authSvc: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return !this.authSvc.synLoggedIn
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.canActivate(childRoute, state);
  }

}
