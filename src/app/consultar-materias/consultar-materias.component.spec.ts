import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMateriasComponent } from './consultar-materias.component';

describe('ConsultarMateriasComponent', () => {
  let component: ConsultarMateriasComponent;
  let fixture: ComponentFixture<ConsultarMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
