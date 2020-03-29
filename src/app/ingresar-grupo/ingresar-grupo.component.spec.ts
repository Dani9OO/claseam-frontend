import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarGrupoComponent } from './ingresar-grupo.component';

describe('IngresarGrupoComponent', () => {
  let component: IngresarGrupoComponent;
  let fixture: ComponentFixture<IngresarGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
