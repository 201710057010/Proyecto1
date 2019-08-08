import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://0.0.0.0';

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getallcomentaries(): Observable <any> {
    return this.http.get(this.baseurl + '/commentaries/', {headers : this.httpHeaders});
  }

  createUser(emailUser, nameUser, passwordUser): Observable <any> {
    const body = {email: emailUser , username: nameUser , password: passwordUser};
    return this.http.post(this.baseurl + '/users/' , body, {headers: this.httpHeaders});
  }

  login(nameUser, passwordUser): Observable <any> {
    const body = {username: nameUser , password: passwordUser};
    return this.http.post(this.baseurl + '/login/', body , {headers: this.httpHeaders});
  }

  creatcomment(tema, comentario, token): Observable <any> {
    const body = {commentary: comentario, topic: tema};
    return this.http.post(this.baseurl + '/commentaries/', body, {headers: this.httpHeaders.append('Authorization', 'Token ' + token)});
  }
}
