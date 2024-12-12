import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './tasks/tasks.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUsersTask() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onCompleteTask(id: string) {}
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
