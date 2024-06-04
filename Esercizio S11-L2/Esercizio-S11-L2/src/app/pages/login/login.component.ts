import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('f',{static:true}) form!:NgForm

  constructor(private loginSvc:LoginService) {}


  submit(){
    return this.loginSvc.submitForm(this.form);
  }
  isTouchedInvalid(field:NgModel) {
    return this.loginSvc.isTouchedInvalid(field)
  }

}
