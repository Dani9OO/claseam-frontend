import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  headers = new HttpHeaders ({

  });

  constructor(
    private http: HttpClient
  ) { }

  registrarAlumno(alumno: object) {
    return this.http.post('http://localhost:3000/api/user/create', alumno);
  }
}
