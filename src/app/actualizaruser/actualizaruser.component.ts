import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-actualizaruser',
  templateUrl: './actualizaruser.component.html',
  styleUrls: ['./actualizaruser.component.css']
})
export class ActualizaruserComponent implements OnInit {
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
    iduser:null
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
        this.user=this.users.find((u)=>{return u.iduser==this.id});
        console.log(this.user);
      })
    }else{
      this.validar=false;
    }
    
  }
  UpdateUser(){
    this.userService.put(this.user).subscribe((data)=>{
      alert('Actualizado Coreectamente');
      console.log(data);
    },(error)=>{
      console.log(error);
      alert('obtuvo un error');
    });
  }
 

  ngOnInit() {
  }

}
