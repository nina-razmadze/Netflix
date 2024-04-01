import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectLengBtnComponent } from '../shared/components/select-leng-btn/select-leng-btn.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { RouterEvent, RouterModule } from '@angular/router';
import { SubscriptionCardComponent } from './components/cards/subscription-card/subscription-card.component';
import { ReasonsCardComponent } from './components/cards/reasons-card/reasons-card.component';
@NgModule({
  declarations: [HeaderComponent, SelectLengBtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, HeaderComponent, SelectLengBtnComponent],
})
export class SharedModule {}
