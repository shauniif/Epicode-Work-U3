import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  constructor(private authSvc: AuthService) {}
  isLoggedIn: boolean = false
  ngOnInit() {
    this.isLoggedIn = this.authSvc.isLoggedIn

  }
  login() {
    this.authSvc.login()
    this.isLoggedIn = this.authSvc.isLoggedIn

  }
  logout() {
    this.authSvc.logout()
    this.isLoggedIn = this.authSvc.isLoggedIn

  }
}
