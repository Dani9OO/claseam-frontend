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
      return this.http.post(`${environment.api}/activities/update`, actividad);
    }
    obtenerAlumno() {
      return this.http.get(`${environment.api}/activities/retrieve`);
    }
    materiaActividad() {
      return this.http.get(`${environment.api}/activities/subject`);
    }
    eliminarActividad(actividad: object) {
      return this.http.delete(`${environment.api}/activities/delete`, actividad);
    }

}
