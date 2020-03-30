import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../_services/user.service';

export interface UserData {
  _id: string;
  forename: string;
  surname: string;
  email: string;
  type: string;
  group: string;
}

export interface Transaction {
  _id: string;
  forename: string;
  surname: string;
  email: string;
  tipo: string;
}

@Component({
  selector: 'app-consultar-alumnos',
  templateUrl: './consultar-alumnos.component.html',
  styleUrls: ['./consultar-alumnos.component.css']
})
export class ConsultarAlumnosComponent implements OnInit {

  cambios = [];
  cambio: Transaction;
  displayedColumns: string[] = ['nombre', 'email', 'grupo', 'acciones rápidas'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
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
      this.userService.actualizarAlumno(alumno);
    } else if ( tipo === 'e') {
      this.userService.eliminarAlumno(alumno).subscribe((data) => {
        console.log(data);
      });
      this.cambios.splice(this.cambios.findIndex(cambio => cambio.id === alumno), 1);
    }
  }

}
