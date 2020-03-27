import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirActividadComponent } from './subir-actividad.component';

describe('SubirActividadComponent', () => {
  let component: SubirActividadComponent;
  let fixture: ComponentFixture<SubirActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
