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
    return this.http.post('${environment.api}/user/create', alumno);
  }
  actualizarAlumno(alumno: object) {
    return this.http.post('${environment.api}/user/update', alumno);
  }
  recuperarAlumno(alumno: object) {
    return this.http.get('${environment.api}/user/retrieve', alumno);
  }
  eliminarAlumno(alumno: object) {
    return this.http.delete('${environment.api}/user/delete', alumno);
  }



}



