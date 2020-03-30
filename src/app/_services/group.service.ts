import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  headers = new HttpHeaders ({

  });

  constructor(
    private http: HttpClient
  ) { }

  crearGrupo(grupo: object) {
    return this.http.post(`${environment.api}/group/create`, grupo);
  }
  actualizarGrupo(grupo: object) {
    const options = {
      headers: this.headers,
      body: grupo
    };
    return this.http.put(`${environment.api}/group/update`, options);
  }
  anadirUsuarioGrupo(grupo: object) {
    const options = {
      headers: this.headers,
      body: grupo
    };
    return this.http.put(`${environment.api}/group/addUser`, options);
  }
  asignarActividadGrupo(grupo: object) {
    const options = {
      headers: this.headers,
      body: grupo
    };
    return this.http.put(`${environment.api}/group/assignActivity`, options);
  }
  obtenerGrupo() {
    return this.http.get(`${environment.api}/group/retrieve`);
}
  obtenerUnoGrupo() {
    return this.http.get(`${environment.api}/group/retrieveOne`);
  }
  eliminarGrupo(grupo: object) {
    const options = {
      headers: this.headers,
      body: grupo
    };
    return this.http.delete(`${environment.api}/group/delete`, options);
  }
}
