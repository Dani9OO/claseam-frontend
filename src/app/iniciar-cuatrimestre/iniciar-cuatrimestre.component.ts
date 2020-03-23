import { Component, OnInit } from '@angular/core';

interface Periodo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-iniciar-cuatrimestre',
  templateUrl: './iniciar-cuatrimestre.component.html',
  styleUrls: ['./iniciar-cuatrimestre.component.css']
})
export class IniciarCuatrimestreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  periodo: Periodo[] = [
    {value: '0', viewValue: 'Enero-Abril'},
    {value: '1', viewValue: 'Mayo-Agosto'},
    {value: '2', viewValue: 'Septiembre-Diciembre'}
  ];


}
