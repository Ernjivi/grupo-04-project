import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProgramsService {

  constructor(private http: HttpClient) { }

  fetchPrograms(){
    return this.http.get(`${environment.apiUrl}programs/`)
  }

  fetchProgram(id: string){
    return this.http.get(`${environment.apiUrl}programs/${id}/`)
  }

  sayHello(){
    console.log('Hola Mundo!');
  }

}
