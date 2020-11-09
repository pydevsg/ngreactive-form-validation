import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'form-app';
  isSubmitted = false;
  registration: any = [];
  constructor(public fb: FormBuilder) { }

  registrationForm = this.fb.group({
    name:['',[Validators.required]],
    gender: ['', [Validators.required]],
    emailid:['', [Validators.required,Validators.email]],
    phoneno:['']
  })
  
  name() {
    return this.registrationForm.get("name");
  }

  gender() {
    return this.registrationForm.get("gender");
  }

  emailid() {
    return this.registrationForm.get("emailid");
  }

  phoneno() {
    return this.registrationForm.get("phoneno");
  }
  
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    }
    else {
      var x = this.registrationForm.value;
      this.registration = Array.from(Object.entries(x));
      this.registrationForm.reset();
    }
  }
}




