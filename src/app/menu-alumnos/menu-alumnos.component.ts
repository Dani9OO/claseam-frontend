import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubirActividadComponent } from '../subir-actividad/subir-actividad.component';
import { IngresarGrupoComponent } from '../ingresar-grupo/ingresar-grupo.component';

@Component({
  selector: 'app-menu-alumnos',
  templateUrl: './menu-alumnos.component.html',
  styleUrls: ['./menu-alumnos.component.css']
})
export class MenuAlumnosComponent implements OnInit {

  dialogRef;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openSubirActividad(): void {
    this.dialogRef = this.dialog.open(SubirActividadComponent, {
      width: '500px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
    });
  }

  openIngresar(): void {
    this.dialogRef = this.dialog.open(IngresarGrupoComponent, {
      width: '350px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
    });
  }
/*
  openCalificaciones(): void {
    this.dialogRef = this.dialog.open(ConsultarCalificacionesComponent, {
      width: '425px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
    });
  }*/

}
