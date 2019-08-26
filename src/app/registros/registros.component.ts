import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';
import { error } from 'util';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  user: Users= {
    email:null,
    password:null,
    created_at:null,
    updated_at:null,
    api_key:null,
    nombre:null,
    Apellidos:null,
    DNI:null,
    Direccion:null,
    Telefono:null,
    idPersona:null
  };

  constructor(private userService:UsersService) {
   
   }

  ngOnInit() {
  }
  SaveUser(){
    this.userService.save(this.user).subscribe((data)=>{
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Registrado Correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.user.Apellidos="";
      this.user.DNI='';
      this.user.Direccion='';
      this.user.Telefono='';
      this.user.email='';
      this.user.nombre='';
      this.user.password='';

      console.log(data);
    },(error)=>{
      console.log(error);
      alert('obtuvo un error');
    });
  }

}
