import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData{
    Lunes: Array<Number>;
    Martes: Array<Number>;
    Miercoles: Array<Number>;
    Jueves: Array<Number>;
    Viernes: Array<Number>;
}
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {

  constructor(
    public dialogRef: MatDialogRef<HorarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
