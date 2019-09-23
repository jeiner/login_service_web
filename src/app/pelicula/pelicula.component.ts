import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/Pelicula';
import { PeliculaService } from '../services/pelicula.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  peli:Pelicula[];
   uploadForm: FormGroup;  
  pelicu: Pelicula= {
    Genero: null,
    Titulo:null,
    Descripcion: null,
    foto_pelicula:null,
    video_Pelicula: null,
    Costo: null,
    Fecha_estreno:null,
    Cantidad_Pelicula: null,
    Ranking:null,
  };


  constructor(private peliculaService:PeliculaService, private router:Router) {
    this.ListarPeliculas();
   }

  ngOnInit() {
    
  }
  ListarPeliculas(){
    this.peliculaService.getPelicula().subscribe((data:Pelicula[])=>{
      this.peli=data;
    },(error)=>{
      console.log(error);
      alert('error al cargar los datos');

    })
    
  }
 
 
  

}
