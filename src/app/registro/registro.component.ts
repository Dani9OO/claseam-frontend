import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import { UserService } from '../_services/user.service';

export interface DialogData {
  animal: string;
  name: string;
}
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
    public dialogRef: MatDialogRef<RegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(registerData) {
    console.warn('datos de registro', registerData);
    this.servicio.registrarAlumno(registerData).subscribe((data: any[]) => {
      console.log(data);
      this.usuario = data;
    });
  }


}
