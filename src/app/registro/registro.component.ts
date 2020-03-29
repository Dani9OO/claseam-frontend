import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {FormBuilder} from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {  

  usuario: object;

  hide = true;
    registroForm;

    constructor(
      private formBuilder: FormBuilder,
      private servicio: UserService
      ) {
        this.registroForm = this.formBuilder.group({
          forename: '',
          surname: '',
          email: '',
          password: ''
        });
      }

  onSubmit(registerData) {
    console.warn('datos de registro', registerData);
    this.servicio.registrarAlumno(registerData).subscribe((data: any[]) => {
      console.log(data);
      this.usuario = data;
    });
  }


}
