import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubjectService } from '../_services/subject.service';
import {FormBuilder} from '@angular/forms';

export interface DialogData {
  animal: string;
}
@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent {

  registroMateria;

  materias: object;
  constructor(
    private formBuilder: FormBuilder,
    private servicio: SubjectService,
    public dialogRef: MatDialogRef<MateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.registroMateria = this.formBuilder.group({
        name: '',
        curriculum: ''
      });
    }

    onSubmit(registerData) {
      console.warn('Datos de la Materia', registerData);
      this.servicio.registrarMateria(registerData).subscribe((data: any[]) => {
        console.log(data);
        this.materias = data;
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  checked = false;

  


}
