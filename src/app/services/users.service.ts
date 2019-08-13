import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './../interfaces/users';

import{tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

interface myData {
  iduser: string,
  email: string,
  created_at: string,
  api_key: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    const path = 'http://localhost:8089/api/users';
    return this.http.get<Users[]>(path, httpOptions);
  }

  getSomeData(){
    const path = 'http://localhost:8089/users';
  }
}
