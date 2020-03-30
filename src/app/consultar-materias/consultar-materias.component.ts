import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubjectService } from '../_services/subject.service';
import { MatDialog } from '@angular/material/dialog';

export interface SubjectData{
  _id: string;
  name: string;
  curriculum: string;
}


@Component({
  selector: 'app-consultar-materias',
  templateUrl: './consultar-materias.component.html',
  styleUrls: ['./consultar-materias.component.css']
})
export class ConsultarMateriasComponent implements OnInit {

  cambios = [];
  displayedColumns: string[] = ['nombre', 'curriculum', 'acciones rápidas'];
  dataSource: MatTableDataSource<SubjectData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private subjectService: SubjectService
  ) {
    this.subjectService.obtenerMateria().subscribe((data: any) => {
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

  eliminarMateria(materia: {_id: string, name: string; curriculum: string;}){
    console.log(materia._id);
    const cambio = {
      _id: materia._id,
      name: materia.name,
      curriculum: materia.curriculum
    };
    this.cambios.push(cambio);
    console.log(cambio);
  }

  aplicarCambios(materia: any) {
    this.subjectService.eliminarMateria(materia).subscribe((data) => {
      console.log(data);
    });
    this.cambios.splice(this.cambios.findIndex(cambio => cambio.id === materia), 1);
}


}
