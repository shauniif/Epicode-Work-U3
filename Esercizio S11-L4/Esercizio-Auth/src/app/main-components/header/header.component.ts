import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  isLoggedIn:boolean = false;
  constructor(private authSvc:AuthService) {}

  ngOnInit() {
    this.authSvc.isLoggeIn$.subscribe(isLoggedIn =>this.isLoggedIn = isLoggedIn);
  }
  logout():void {
    this.authSvc.logout();
  }
}
