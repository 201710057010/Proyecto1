import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
  providers: [ApiService]
})
export class ComentariosComponent implements OnInit {

  comentarios;
  usuarios;
  usuariosComentarios;

  constructor(private api: ApiService) {
    this.getComentaries();
  }

  getComentaries = () => {
    this.api.getallcomentaries().subscribe(
      data => {
        this.comentarios = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(){

  }

}
