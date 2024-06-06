import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(private authSvc:AuthService) {}
isLoggendIn:boolean = false;
ngOnInit() {

  this.authSvc.isLoggedIn$.subscribe(isLoggedIn => this.isLoggendIn = isLoggedIn)
}
logout() {
    this.authSvc.logout()

  }

}

