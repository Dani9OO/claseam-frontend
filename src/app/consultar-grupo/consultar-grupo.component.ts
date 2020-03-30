import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { GroupService } from '../_services/group.service';

export interface Group{
 
}

export interface Transaction{

}

@Component({
  selector: 'app-consultar-grupo',
  templateUrl: './consultar-grupo.component.html',
  styleUrls: ['./consultar-grupo.component.css']
})
export class ConsultarGrupoComponent implements OnInit {

  cambios = [];
  cambio: Transaction;
  dataSource: MatTableDataSource<Group>;
  displayedColumns: string[] = ['grupo', 'calendario', 'materia', 'acciones rápidas'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private groupService: GroupService, 
  ) { 
    this.groupService.obtenerGrupo().subscribe((data: any) => {
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

  dialogRef; 
/*
  editarGrupo(grupo: any) {
    console.log(grupo._id);
    this.dialogRef = this.dialog.open(EditarAlumnoComponent, {
      width: '425px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
    });
  }
  

  eliminarGrupo(grupo: {_id: string, Group: string, Subject: string, Status: string}){
    console.log(grupo._id);
    const cambio = {
      _id: grupo._id,
      Group: grupo.Group,
      Subject: grupo.Subject,
      Status: grupo.Status
    }
    this.cambios.push(cambio);
    console.log(cambio);      
  }

*/
}
