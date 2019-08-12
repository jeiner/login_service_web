import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @Input() productData = { email:'', password: ''};

  constructor(private Auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  addProduct(){
    this.Auth.getUserDetail(this.productData).subscribe(data => {
      console.log(data)
      if (data.status == 'success') {
        this.router.navigate(['users'])
      }else{
        window.alert(" Credenciales invalidas")
      }
    }, (err) => {
      console.log(err);
    });
    
  }

  // loginUser(event) {
  //   event.preventDefault()
  //   const target = event.target
  //   const email = target.querySelector('#usermane').value
  //   const password = target.querySelector('#password').value

  //   this.Auth.getUserDetail(email,password)
  //   console.log(email, password)
  // }


}
