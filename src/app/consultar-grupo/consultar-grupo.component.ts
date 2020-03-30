import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GroupService } from '../_services/group.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-consultar-grupo',
  templateUrl: './consultar-grupo.component.html',
  styleUrls: ['./consultar-grupo.component.css']
})
export class ConsultarGrupoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
