import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent {

  hide = true;
  checkoutForm;

  constructor(
    public dialogRef: MatDialogRef<IniciarsesionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formbuilder: FormBuilder,
    private servicio: AuthenticationService
    ) {
      this.checkoutForm = this.formbuilder.group({
        username: '',
        password: ''
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //falta llamar al servicio....al servicio configurar los parametros
  onSubmit(userData) {
    console.warn('usuario a verificar', userData);
    this.servicio.login(userData).subscribe((data: any[]) => {
      console.log(data);
      this.usuario = data;
    });
    this.checkoutForm.reset();
  }


}
