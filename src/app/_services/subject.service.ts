import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  headers = new HttpHeaders ({

  });
  constructor(
    private http: HttpClient
  ) { }
  registrarMateria(materia: object) {
    return this.http.post(`${environment.api}/subject/create`, materia);
  }
  actualizarMateria(materia: object) {
    const options = {
      headers: this.headers,
      body: materia
    };
    return this.http.put(`${environment.api}/subject/update`, options);
  }
  obtenerMateria() {
    return this.http.get(`${environment.api}/subject/retrieve`);
  }
  eliminarMateria(materia: object) {
    const options = {
      headers: this.headers,
      body: materia
    };
    return this.http.delete(`${environment.api}/subject/delete`, options);
  }
}
