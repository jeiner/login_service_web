import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-compradores';

  constructor(private taskService: TaskService, private usersService: UsersService ){}

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  getAllUsers() {
    this.usersService.getAllUsers()
    .subscribe(users => {
      console.log(users)
    });
  }

}
