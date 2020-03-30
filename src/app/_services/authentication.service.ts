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

  public get currentUserValue(): Usuario {
      return this.currentUserSubject.value;
  }
/*
  login(username: string, password: string) {
    const user = await User.findOne({username: username})
    if(!user) {
        return res.status(404).send("el usuario no existe")
    }
    const validPassword = await user.comparePassword(req.body.password, user.password);
    if (!validPassword) {
        return res.status(401).send({auth: false, token: null});
    }

    //si existe usuario y contraseña es correcta se crea token

    const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 60 * 60 * 24 //tiempo de vida del token
    });
    res.status(200).json({auth: true, token});
}*/
}
  