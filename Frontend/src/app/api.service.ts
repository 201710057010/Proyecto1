import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://127.0.0.1:8000';

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getallcomentaries(): Observable <any> {
    return this.http.get(this.baseurl + '/commentaries/', {headers : this.httpHeaders});
  }

  createUser(emailUser, nameUser, passwordUser) : Observable <any> {
    const body = {email: emailUser , username: nameUser , password: passwordUser};
    return this.http.post(this.baseurl + '/users/' , body, {headers: this.httpHeaders});
  }
}
