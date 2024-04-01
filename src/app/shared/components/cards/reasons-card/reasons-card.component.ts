import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reasons-card',
  templateUrl: './reasons-card.component.html',
  styleUrl: './reasons-card.component.css',
})
export class ReasonsCardComponent {
  @Input() title: string;
  @Input() info: string;
  @Input() icon: any;
}
