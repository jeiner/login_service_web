import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../interfaces/Pelicula';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  CrearPelicula = 'http://localhost:8000/api';
  uploadForm: FormGroup;  
  constructor(private httpclient:HttpClient) {  
   }
   save(formData) {
    return this.httpclient.post<any>(this.CrearPelicula + '/Pelicula/?', formData);
   }
   getPelicula(){
    return this.httpclient.get(this.CrearPelicula + '/Pelicula');
   }
}
