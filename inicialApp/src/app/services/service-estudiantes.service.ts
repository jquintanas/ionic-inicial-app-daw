import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiantes } from '../models/Estudiantes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceEstudiantesService {
  private url_base = 'https://api-test-daw.herokuapp.com/';
  constructor(private _http: HttpClient) { }

  getData(): Observable<Estudiantes>{
    return this._http.get<Estudiantes>(this.url_base+"getData");
  }

  postData(data:any) {
    return this._http.post<any>(this.url_base+"postData",data);
  }
}
