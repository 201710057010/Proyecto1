import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService, CookieService]
})

export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private cookie: CookieService) { }

  login = (nameUser, passwordUser) => {
    this.api.login(nameUser, passwordUser).subscribe(
      data => {
        this.cookie.set('token', JSON.stringify(data));
        this.router.navigateByUrl('/comentarios');
      }
    );
  }


  ngOnInit() {
  }

}
