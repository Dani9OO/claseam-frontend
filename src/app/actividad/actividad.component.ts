import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../_services/subject.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AsignarActividadComponent } from '../asignar-actividad/asignar-actividad.component';
import { ActivitiesService } from '../_services/activities.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  materias: object;
  actividad: object;
  dialogRef;
  crearActividad;
  constructor(
    public dialog: MatDialog,
    private serve: SubjectService,
    private formBuilder: FormBuilder,
    private server: ActivitiesService
  ) {
    this.crearActividad = this.formBuilder.group({
      title: '',
      details: '',
      subject: ''
    });
   }

   onSubmit(registerData) {
    console.warn('Datos de la Actividad', registerData);
    this.server.crearActividad(registerData).subscribe((data: any[]) => {
      console.log(data);
      this.actividad = data;
    });
  }
  ngOnInit() {
    this.serve.obtenerMateria().subscribe((data: any[]) => {
      console.log(data);
      this.materias = data;
    });
  }

  openAsignar(): void {
    this.dialogRef = this.dialog.open(AsignarActividadComponent, {
      width: '450px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
