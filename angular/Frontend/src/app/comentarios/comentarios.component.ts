import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
  providers: [ApiService, CookieService]
})
export class ComentariosComponent implements OnInit {

  comentarios;

  constructor(private api: ApiService, private cookie: CookieService) {
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

  comentar = (temaComentario, comentario) => {
    const token = this.cookie.get('token');
    this.api.creatcomment(temaComentario, comentario, token).subscribe();
  }

  ngOnInit(){

  }

}
