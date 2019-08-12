import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient ) { }

  getAllTasks() {
    const path = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Task[]>(path);
  }

  
}
