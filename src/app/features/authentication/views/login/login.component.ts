import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('f') loginForm: NgForm;
  FormSubmitted = false;

  user = {
    email: '',
    password: '',
  };

  onSubmit() {
    this.FormSubmitted = true;
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    this.loginForm.reset();
  }
}
