import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../../../core/services/email.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-email-input',
  templateUrl: './home-email-input.component.html',
  styleUrl: './home-email-input.component.css',
})
export class HomeEmailInputComponent {
  @ViewChild('email') email: NgForm;
  userEmail = '';
  isButtonDisabled = false;

  constructor(private emailService: EmailService, private router: Router) {}

  onSubmit() {
    if (this.email.valid) {
      this.emailService.setEmail(this.userEmail);
      this.userEmail = this.email.value;
      console.log('emitted', this.userEmail);
      this.router.navigate(['/home/register']);
    } else {
      this.isButtonDisabled = true;
    }
  }
}
