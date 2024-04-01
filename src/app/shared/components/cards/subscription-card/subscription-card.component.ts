import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrl: './subscription-card.component.css',
})
export class SubscriptionCardComponent {
  @Input() title: string;
  @Input() info: string;
  @Input() price: any;
}
