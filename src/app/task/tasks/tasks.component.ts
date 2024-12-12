import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './tasks.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
