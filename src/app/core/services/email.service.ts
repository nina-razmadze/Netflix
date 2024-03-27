import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  enteredEmail = new Subject<string>();

  constructor() {}

  setEmail(email: string) {
    this.enteredEmail.next(email);
  }
}
