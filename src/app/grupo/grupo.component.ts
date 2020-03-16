import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HorarioComponent } from '../horario/horario.component';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent {

  constructor(public dialog: MatDialog) { }

  dialogRef;

  openHorario(): void {
    this.dialogRef = this.dialog.open(HorarioComponent, {
      width: '500px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
