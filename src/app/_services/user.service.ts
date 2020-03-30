import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient
  ) { }

  registrarAlumno(alumno: object) {
    return this.http.post(`${environment.api}/user/create`, alumno);
  }
  actualizarAlumno(alumno: object) {
    const options = {
      headers: this.headers,
      body: alumno
    };
    return this.http.put(`${environment.api}/user/update`, options);
  }
  obtenerAlumno() {
    return this.http.get(`${environment.api}/user/retrieve`);
  }
  eliminarAlumno(alumno: object) {
    const options = {
      headers: this.headers,
      body: alumno
    };
    return this.http.delete(`${environment.api}/user/delete`, options);
  }
  calificarAlumno(alumno: object) {
    const options = {
      headers: this.headers,
      body: alumno
    };
    return this.http.put(`${environment.api}/user/gradeActivity`, options);
  }
  SubirActividadAlumno(alumno: object) {
    const options = {
      headers: this.headers,
      body: alumno
    };
    return this.http.put(`${environment.api}/user/uploadActivity`, options);
  }

}
