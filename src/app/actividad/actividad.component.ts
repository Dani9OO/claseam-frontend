import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../_services/subject.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  materias: object;
  constructor(
    private serve: SubjectService,
  ) { }

  ngOnInit() {
    this.serve.obtenerMateria().subscribe((data: any[]) => {
      console.log(data);
      this.materias = data;
  });
  }

}
