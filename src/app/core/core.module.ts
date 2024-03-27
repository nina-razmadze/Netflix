import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [],
  providers: [EmailService],
  imports: [CommonModule],
})
export class CoreModule {}
