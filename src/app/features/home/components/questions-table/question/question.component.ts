import { Component, Input } from '@angular/core';
import { Qustion } from '../../../../../core/models/question.model';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  @Input() index: number;
  @Input() question: Qustion;
  clicked = false;

  onShowAnswer() {
    if (this.index === this.question.id) {
      this.clicked = !this.clicked;
    }
  }
}
