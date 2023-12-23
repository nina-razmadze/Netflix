import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { SelectLengBtnComponent } from '../shared/components/select-leng-btn/select-leng-btn.component';

@NgModule({
  declarations: [SelectLengBtnComponent],
  imports: [CommonModule],
  exports: [SelectLengBtnComponent],
})
export class SharedModule {}
