import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivitiesService } from '../_services/activities.service';
import { EditarActividadComponent } from '../editar-actividad/editar-actividad.component';

export interface Actvidad{
  _id: string,
  title: string;
  details: string;
  subject: string;
}


@Component({
  selector: 'app-consultar-actividades',
  templateUrl: './consultar-actividades.component.html',
  styleUrls: ['./consultar-actividades.component.css']
})
export class ConsultarActividadesComponent implements OnInit {

  cambios = [];
  dialogRef;
  displayedColumns: string[] = ['titulo', 'detalles', 'materia', 'acciones rápidas'];
  dataSource: MatTableDataSource<Actvidad>;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private activityService: ActivitiesService
  ) {
    this.activityService.obtenerActividad().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarActividad(actividad: any) {
    console.log(actividad._id);
    this.dialogRef = this.dialog.open(EditarActividadComponent, {
      width: '425px',
      data: { _id: actividad._id, title: actividad.title, details: actividad.details, subject: actividad.subject}
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
      const cambio = {
        _id: result._id,
        title: result.title,
        details: result.details,
        subject: result.subject,
        tipo: 'c'
      }
      this.cambios.push(cambio);
      console.log(cambio);
    });
  }

  eliminarActividad(actividad: {_id: string, title: string; details: string; subject: string;}){
    console.log(actividad._id);
    const cambio = {
      _id: actividad._id,
      title: actividad.title,
      details: actividad.details,
      subject: actividad.subject
    };
    this.cambios.push(cambio);
    console.log(cambio);
  }


  aplicarCambios(actividad: any) {
      this.activityService.eliminarActividad(actividad).subscribe((data) => {
        console.log(data);
      });
      this.cambios.splice(this.cambios.findIndex(cambio => cambio.id === actividad), 1);
  }

}
