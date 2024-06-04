import { Injectable } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  submitForm(form:NgForm) {
  console.log(form.form.value);
  }

  isTouchedInvalid(field:NgModel) {
    return field?.invalid && field?.touched
  }

}
