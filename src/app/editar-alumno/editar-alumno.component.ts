import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ConsultarAlumnosComponent } from '../consultar-alumnos/consultar-alumnos.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface UserData {
  _id: string;
  forename: string;
  surname: string;
  email: string;
  type: string;
  group: string;
}

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  usuario: object;
  actualizarForm;
  constructor(
    public dialogRef: MatDialogRef<ConsultarAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
    private formBuilder: FormBuilder,
  ) {
    this.actualizarForm = this.formBuilder.group({
      forename: '',
      surname: '',
      email: ''
    });
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close(this.data);
  }


}
