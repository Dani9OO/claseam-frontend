import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  headers = new HttpHeaders ({

  });
  constructor(
    private http: HttpClient
  ) { }
    crearActividad(actividad: object) {
      return this.http.post(`${environment.api}/activities/create`, actividad);
    }
    ActualizarActividad(actividad: object) {
      const options = {
        headers: this.headers,
        body: actividad
      };
      return this.http.put(`${environment.api}/activities/update`, options);
    }
    obtenerActividad() {
      return this.http.get(`${environment.api}/activities/retrieve`);
    }
    materiaActividad() {
      return this.http.get(`${environment.api}/activities/subject`);
    }
    eliminarActividad(actividad: object) {
      const options = {
        headers: this.headers,
        body: actividad
      };
      return this.http.delete(`${environment.api}/activities/delete`, options);
    }

}
