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
    return this.http.put(`${environment.api}/subject/update`, materia);
  }
  obtenerMateria() {
    return this.http.get(`${environment.api}/subject/retrieve`);
  }
  eliminarMateria(materia: object) {
    return this.http.delete(`${environment.api}/subject/delete`, materia);
  }
}
