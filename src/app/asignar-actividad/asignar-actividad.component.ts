import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../_services/subject.service';
import { GroupService } from '../_services/group.service';
import { ActivitiesService } from '../_services/activities.service';

@Component({
  selector: 'app-asignar-actividad',
  templateUrl: './asignar-actividad.component.html',
  styleUrls: ['./asignar-actividad.component.css']
})
export class AsignarActividadComponent implements OnInit {
grupo: object;
actividades: object;
  constructor(
    private serve: GroupService,
    private server: ActivitiesService,
  ) { }

  ngOnInit() {
    this.serve.obtenerGrupo().subscribe((data: any[]) => {
      console.log(data);
      this.grupo = data;
  });

  this.server.obtenerActividad().subscribe((data: any[]) => {
    console.log(data);
    this.actividades = data;
});
  }

}
