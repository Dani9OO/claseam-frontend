import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
interface Grupo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    toppings = new FormControl();
    toppingList: string[] = ['1-A', '1-B', '2-A', '2-B', '3-A', '3-B','4-A','4-B','5-A','5-B'];
}
