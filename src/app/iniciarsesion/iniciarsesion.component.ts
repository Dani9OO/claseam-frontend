import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

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

   user={   }

  constructor(
    public dialogRef: MatDialogRef<IniciarsesionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formbuilder: FormBuilder,
    private servicio: AuthenticationService,
    private router: Router
    ) {
      this.checkoutForm = this.formbuilder.group({
        email: '',
        password: ''
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  iniciaSesion(){
    this.servicio.iniciar(this.user).subscribe(
      res =>{
        console.log(this.user);
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate([`${environment.api}`]);
        this.dialogRef.close();
      },
      err => console.log(err)
    )
  }


}
