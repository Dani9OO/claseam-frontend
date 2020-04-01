import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;


  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  iniciar(user){
    return this.http.post<any>(`${environment.api}/auth/login`, user);
  }

  isLoggedIn(){
    if(localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  public get currentUserValue(): Usuario {
      return this.currentUserSubject.value;
  }

}
