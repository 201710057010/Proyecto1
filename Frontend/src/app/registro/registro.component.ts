import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ApiService]
})
export class RegistroComponent implements OnInit {

  mensaje;

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private api: ApiService) { }

  createUser  = (emailUser, nameUser, passwordUser) => {
    if (emailUser !== '' && nameUser !== '' && passwordUser !== '') {
      this.api.createUser(emailUser, nameUser, passwordUser).subscribe(
        data => {
          this.mensaje = 'registro exitoso';
        },
        error => {
          this.mensaje = 'hubo un error intentelo mas tarde';
        }
      );
    }
  }

  ngOnInit() {
  }

}
