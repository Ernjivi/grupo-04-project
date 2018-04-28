import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  public token:string;

  constructor(private http: HttpClient) {
    this.token = JSON.parse(localStorage.getItem('currentUser'))['token'];
  }

  login(username: string, password:string){
    const credentials = { username, password }
    return this.http.post(`${environment.authUrl}`, credentials)
      .map(response => {
        console.log(response['token']);
        if(response['token']){
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: response['token'] }));
          this.token = response['token'];
          return true;
        }
        return false;
      })
  }

}
