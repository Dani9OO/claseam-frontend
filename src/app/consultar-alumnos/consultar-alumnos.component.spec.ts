import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAlumnosComponent } from './consultar-alumnos.component';

describe('ConsultarAlumnosComponent', () => {
  let component: ConsultarAlumnosComponent;
  let fixture: ComponentFixture<ConsultarAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
