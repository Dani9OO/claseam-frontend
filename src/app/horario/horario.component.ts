import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
   hola: string;
}

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {
/*
    L1 = false;
    L2 = false;
    L3 = false;
    L4 = false;
    L5 = false;
    L6 = false;
    L7 = false;
    L8 = false;
    L9 = false;
    L10 = false;

    M1 = false;
    M2 = false;
    M3 = false;
    M4 = false;
    M5 = false;
    M6 = false;
    M7 = false;
    M8 = false;
    M9 = false;
    M10 = false;

    Mi1 = false;
    Mi2 = false;
    Mi3 = false;
    Mi4 = false;
    Mi5 = false;
    Mi6 = false;
    Mi7 = false;
    Mi8 = false;
    Mi9 = false;
    Mi10 = false;

    J1 = false;
    J2 = false;
    J3 = false;
    J4 = false;
    J5 = false;
    J6 = false;
    J7 = false;
    J8 = false;
    J9 = false;
    J10 = false;

    V1 = false;
    V2 = false;
    V3 = false;
    V4 = false;
    V5 = false;
    V6 = false;
    V7 = false;
    V8 = false;
    V9 = false;
    V10 = false;
    */

  constructor(
    public dialogRef: MatDialogRef<HorarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
