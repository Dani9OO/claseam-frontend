import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCalificacionesComponent } from './consultar-calificaciones.component';

describe('ConsultarCalificacionesComponent', () => {
  let component: ConsultarCalificacionesComponent;
  let fixture: ComponentFixture<ConsultarCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
