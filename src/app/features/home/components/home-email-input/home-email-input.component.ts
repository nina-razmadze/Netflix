import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-email-input',
  templateUrl: './home-email-input.component.html',
  styleUrl: './home-email-input.component.css',
})
export class HomeEmailInputComponent {
  @ViewChild('email') email: NgForm;

  onSubmit() {
    this.email.reset();
  }
}
