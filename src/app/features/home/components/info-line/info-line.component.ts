import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-line',
  templateUrl: './info-line.component.html',
  styleUrl: './info-line.component.css',
})
export class InfoLineComponent {
  @Input() rightInfo: boolean = true;
  @Input() imageSrc: string;
}
