import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ViewsComponent } from './views/views.component';
import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/signup/signup.component';

import { loginFooterComponent } from './components/login-footer/login-footer.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { SignupFooterComponent } from './components/signup-footer/signup-footer.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    loginFooterComponent,
    ViewsComponent,
    SuccessAlertComponent,
    SignupFooterComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [],
  exports: [CommonModule],
})
export class AuthenticationModule {}
