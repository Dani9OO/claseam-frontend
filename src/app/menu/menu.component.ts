import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HorarioComponent } from '../horario/horario.component';
import { GrupoComponent } from '../grupo/grupo.component';
import { ActividadComponent } from '../actividad/actividad.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  dialogRef;

  constructor(
    public dialog: MatDialog,
  ) { }

  openGrupo(): void {
    this.dialogRef = this.dialog.open(GrupoComponent, {
      width: '500px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
    });
  }

  openActividad(): void {
    this.dialogRef = this.dialog.open(ActividadComponent, {
      width: '500px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
    });
  }


}
