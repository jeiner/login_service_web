import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { UsersService } from '../services/users.service';

import { Users } from './../interfaces/users';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {

  //afiliados: Users[];
  usuarios  = null;
  clientes :any = [];

  art={
    iduser:null,
    email:null,
    created_at:null,
    updated_at: null,
    api_key: null
  }

  constructor(private taskService: TaskService, private usersService: UsersService) { }

  ngOnInit() {
    
    //this.usersService.getAllUsers().subscribe(datos => this.usuarios = datos)
    this.getAllUsers();
  }

  recuperarTodos() {
    this.usersService.getAllUsers().subscribe(result => this.usuarios = result);
  }

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      this.usuarios = tasks;
      console.log(tasks);
    });
  }

   getAllUsers(){
    this.usersService.getAllUsers()
    .subscribe( ( result: {} )=> {
      this.clientes = [];
      this.clientes = result;
      console.log(this.clientes);
    });
  }

}
