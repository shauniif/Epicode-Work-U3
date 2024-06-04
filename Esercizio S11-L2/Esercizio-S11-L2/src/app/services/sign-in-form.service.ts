import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
      confirmPassword: this.fb.control(null, [Validators.required]),
      gender: this.fb.control(null, [Validators.required]),
      biography: this.fb.control(null, [Validators.required]),
      file: this.fb.control(null, [Validators.required]),
      username: this.fb.control(null, [Validators.required])
    }, { validators : this.matchPassword}
  );
  }
  isTouchedInvalid(form:FormGroup,  fieldName:string){
    const field = form.get(fieldName);

    return field?.invalid && field?.touched
  }



  matchPassword: ValidatorFn = (formC:AbstractControl): ValidationErrors|null => {
    const password = formC.get('password');
    const confirmPassword = formC.get('confirmPassword');
    if(password?.value !== confirmPassword?.value) {
      return  {
        invalidMatch: true
      }
      }
      return null
  }
/*  matchPassword: ValidatorFn = (formC:AbstractControl): ValidationErrors|null => {
    const password = formC.get('password');
    const confirmPassword = formC.get('confirmPassword');
    return (password?.value === confirmPassword?.value) ? null: {invalidMatch: true};
  } */
  submitSignIn(form: FormGroup) {
    return console.log(form)
  }

}

