import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignInFormService {

  constructor(private fb: FormBuilder) {}

  createSignInForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      surname: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
      Confirmpassword: this.fb.control(null, [Validators.required]),
      gender: this.fb.control(null, [Validators.required]),
      biography: this.fb.control(null, [Validators.required]),
      file: this.fb.control(null, [Validators.required]),
      username: this.fb.control(null, [Validators.required])
    }, { validator : this.matchPassword}
  );
  }
  isTouchedInvalid(form:FormGroup,  fieldName:string){
    const field = form.get(fieldName);

    return field?.invalid && field?.touched
  }
  matchPassword = (formC:FormControl): ValidationErrors|null => {
    const password = formC.get('password')?.value;
    const confirmPassword = formC.get('confirmPassword')?.value;
    if(password !== confirmPassword) {
      return  {
        invalidmatch: true
      }
      }
      return null
  }
  submitSignIn(form: FormGroup) {
    return console.log(form.value)
  }

}

