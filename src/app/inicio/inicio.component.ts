import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistroComponent } from '../registro/registro.component';
import { IniciarsesionComponent } from '../iniciarsesion/iniciarsesion.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  dialogRef;

  constructor(public dialog: MatDialog) { }

  openRegistro(): void {
    this.dialogRef = this.dialog.open(RegistroComponent, {
      width: '450px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openIniciarSesion(): void {
    this.dialogRef = this.dialog.open(IniciarsesionComponent, {
      width: '450px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


}
