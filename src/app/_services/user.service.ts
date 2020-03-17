import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders ({

  });

  constructor(
    private http: HttpClient
  ) { }

  registrarAlumno(alumno: object) {
    return this.http.post(`${environment.api}/user/create`, alumno);
  }
  actualizarAlumno(alumno: object) {
    return this.http.put(`${environment.api}/user/create`, alumno);
  }
  obtenerAlumno() {
    return this.http.get(`${environment.api}/user/retrieve`);
  }
  eliminarAlumno(alumno: object) {
    return this.http.delete(`${environment.api}/user/delete`, alumno);
  }
  calificarAlumno(alumno: object) {
    return this.http.put(`${environment.api}/user/gradeActivity`, alumno);
  }
  SubirActividadAlumno(alumno: object) {
    return this.http.put(`${environment.api}/user/uploadActivity`, alumno);
  }

}
