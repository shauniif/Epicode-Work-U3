import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignInFormService } from '../../services/sign-in-form.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  signInForm!:FormGroup;
  constructor(private signInSvc: SignInFormService) {}

ngOnInit() {
  this.signInForm = this.signInSvc.createSignInForm()
}
submitSignIn() {
  this.signInSvc.submitSignIn(this.signInForm)
}
isTouchedInvalid(fieldName: string) {
  return this.signInSvc.isTouchedInvalid(this.signInForm, fieldName)

}
}
