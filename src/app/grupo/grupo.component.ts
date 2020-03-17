import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HorarioComponent } from '../horario/horario.component';
import { MateriaComponent } from '../materia/materia.component';
import { SubjectService } from '../_services/subject.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  hola: string;
}

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  materias: object;

  constructor(
    private serve: SubjectService,
    public dialog: MatDialog,
    public dialogReff: MatDialogRef<GrupoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  Lunes: number;
  Martes: number;
  Miercoles: number;
  Jueves: number;
  Viernes: number;

  horario;
  dialogRef;

  openHorario(): void {
    this.dialogRef = this.dialog.open(HorarioComponent, {
      width: '450px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
      this.serve.obtenerMateria().subscribe((data: any[]) => {
        console.log(data);
        this.materias = data;
    });
  }

}
