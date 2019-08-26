import { Component, OnInit } from '@angular/core';
import {UsersService}  from '../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';
import Swal from 'sweetalert2';
import { from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
 
  user:Users[];
  
  constructor(private usersService: UsersService,private httpClient:HttpClient) {
    this.getUser();

   }
   getUser(){
    this.usersService.get().subscribe((data: Users[])=>{
      this.user=data;

    },(error)=>{
      console.log(error);
      alert('error al cargar los datos');

    })
   }
   eliminar(id){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
     
      if (result.value) {
        this.usersService.delete(id).subscribe((data)=>{
          this.getUser();
        });
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
    
  }

  ngOnInit() {
  }

}
