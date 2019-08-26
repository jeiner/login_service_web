import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './../interfaces/users';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  CrearUser='http://192.168.1.140:8000/api';
  constructor(private httpClient:HttpClient) { }
  get(){
   return this.httpClient.get(this.CrearUser +'/allUser');
  }
  save(users:Users){
 const headers=new HttpHeaders({
  'Content-Type':  'application/json'
 });
 return this.httpClient.post(this.CrearUser+'/Persona/?',users,{headers:headers});
  }

  put(user){
    const headers=new HttpHeaders({
     'Content-Type':  'application/json'
    });
    
    return this.httpClient.put(this.CrearUser+'/userUpdate/'+user.idPersona,user,{headers:headers});
     }
     delete(id){
      return this.httpClient.delete(this.CrearUser +'/delete/'+id);
     }

 

  
}
