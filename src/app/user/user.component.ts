import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CardComponent], // Fixed property name
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
