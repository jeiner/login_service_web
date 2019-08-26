import { Component, OnInit } from '@angular/core';
import {UsersService}  from '../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
 
  user:Users[];
  
  constructor(private usersService: UsersService,private httpClient:HttpClient) {
    this.usersService.get().subscribe((data: Users[])=>{
      this.user=data;

    },(error)=>{
      console.log(error);
      alert('error al cargar los datos');

    })

   }
   eliminar(id){
     if(confirm('esta seguro de eliminar este usuario')){
      this.usersService.delete(id).subscribe((data)=>{
        alert('Eliminado correctamente');
      },(error)=>{
        alert('Error al eliminar');
        console.log(error);
      });
     }else{
       
     }
    
  }

  ngOnInit() {
  }

}
