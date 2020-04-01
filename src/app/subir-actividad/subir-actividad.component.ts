import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-subir-actividad',
  templateUrl: './subir-actividad.component.html',
  styleUrls: ['./subir-actividad.component.css']
})
export class SubirActividadComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      activity: '',
      file: [''],
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);
    this.userService.SubirActividadAlumno(formData);
  }

}
