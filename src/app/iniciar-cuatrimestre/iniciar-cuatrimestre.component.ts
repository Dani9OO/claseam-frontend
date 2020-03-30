import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../_services/subject.service';
import { MatDialog } from '@angular/material/dialog';
import { MateriaComponent } from '../materia/materia.component';
import {FormControl} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  materias: object;
  dialogRef;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    public dialog: MatDialog,
    private serve: SubjectService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.serve.obtenerMateria().subscribe((data: any[]) => {
      console.log(data);
      this.materias = data;
  });
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    thirdControl: ['', Validators.required]
  });
}


  openMateria(): void {
    this.dialogRef = this.dialog.open(MateriaComponent, {
      width: '450px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  periodo: Periodo[] = [
    {value: '0', viewValue: 'Enero-Abril'},
    {value: '1', viewValue: 'Mayo-Agosto'},
    {value: '2', viewValue: 'Septiembre-Diciembre'}
  ];

  toppings = new FormControl();
  toppingList: string[] = ['1-A', '1-B', '2-A', '2-B', '3-A', '3-B','4-A','4-B','5-A','5-B'];


}
