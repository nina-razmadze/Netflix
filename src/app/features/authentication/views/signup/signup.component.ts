import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmailService } from '../../../../core/services/email.service';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class RegisterComponent implements OnInit, OnDestroy {
  @ViewChild('f') signupForm: NgForm;
  submitted: boolean = false;
  userEmail: string = '';
  signupSubscription: Subscription;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.signupSubscription = this.emailService.enteredEmail.subscribe(
      (email) => {
        console.log('e ail', email);
        this.userEmail = email;
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.signupForm.reset();
  }
  ngOnDestroy(): void {
    this.signupSubscription.unsubscribe();
  }
}
