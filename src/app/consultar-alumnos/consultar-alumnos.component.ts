import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../_services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarAlumnoComponent } from '../editar-alumno/editar-alumno.component';

export interface UserData {
  _id: string;
  forename: string;
  surname: string;
  email: string;
  type: string;
  group: string;
}


@Component({
  selector: 'app-consultar-alumnos',
  templateUrl: './consultar-alumnos.component.html',
  styleUrls: ['./consultar-alumnos.component.css']
})
export class ConsultarAlumnosComponent implements OnInit {

  cambios = [];
  displayedColumns: string[] = ['nombre', 'email', 'grupo', 'acciones rápidas'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.userService.obtenerAlumno().subscribe((data: any) => {
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

  editarAlumno(alumno: any) {
    console.log(alumno._id);
    this.dialogRef = this.dialog.open(EditarAlumnoComponent, {
      width: '425px',
      data: { _id: alumno._id, forename: alumno.forename, surname: alumno.surname, email: alumno.email }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
      const cambio = {
        _id: result._id,
        forename: result.forename,
        surname: result.surname,
        email: result.email,
        tipo: 'c'
      }
      this.cambios.push(cambio);
      console.log(cambio);
    });
  }


  eliminarAlumno(alumno: { _id: string; forename: string; surname: string; email: string; }) {
    console.log(alumno._id);
    const cambio = {
      _id: alumno._id,
      forename: alumno.forename,
      surname: alumno.surname,
      email: alumno.email,
      tipo: 'e'
    };
    this.cambios.push(cambio);
    console.log(cambio);
  }

  aplicarCambios(alumno: any, tipo: string) {
    if (tipo === 'c') {
      this.userService.actualizarAlumno(alumno).subscribe((data) => {
        console.log(data);
      });
      this.cambios.splice(this.cambios.findIndex(cambio => cambio.id === alumno), 1);
    } else if ( tipo === 'e') {
      this.userService.eliminarAlumno(alumno).subscribe((data) => {
        console.log(data);
      });
      this.cambios.splice(this.cambios.findIndex(cambio => cambio.id === alumno), 1);
    }
  }

  dialogRef;



}

