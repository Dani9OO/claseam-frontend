import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subir-actividad',
  templateUrl: './subir-actividad.component.html',
  styleUrls: ['./subir-actividad.component.css']
})
export class SubirActividadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}
