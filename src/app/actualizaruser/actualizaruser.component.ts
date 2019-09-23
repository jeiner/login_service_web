import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizaruser',
  templateUrl: './actualizaruser.component.html',
  styleUrls: ['./actualizaruser.component.css']
})
export class ActualizaruserComponent implements OnInit {
  user: Users= {
    email:null,
    password:null,
    api_key:null,
    Nombre:null,
    Apellidos:null,
    Dni:null,
    Direccion:null,
    Telefono:null,
    Rol:null,
    idUsuario:null
  };
 id:any;
 validar:boolean=false;
 users:Users[];
  constructor(private userService: UsersService,private autivateRouter: ActivatedRoute) { 
    this.id=this.autivateRouter.snapshot.params['id'];
    if(this.id){
      this.validar=true;
      this.userService.get().subscribe((data:Users[])=>{
        this.users= data;
        this.user=this.users.find((u)=>{return u.idUsuario==this.id});
        console.log(this.user);
      })
    }else{
      this.validar=false;
    }
    
  }
  UpdateUser(){
    this.userService.put(this.user).subscribe((data)=>{
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Actualizado Coreectamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.user.Apellidos='';
      this.user.Dni='';
      this.user.Direccion='';
      this.user.Telefono='';
      this.user.email='';
      this.user.Nombre='';
      this.user.password='';
    
    
      console.log(data);
    },(error)=>{
      console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Obtuvo un error!',
        footer: '<a href>Why do I have this issue?</a>'
      })
     
    });
  }
 

  ngOnInit() {
  }

}
