import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarCuatrimestreComponent } from './iniciar-cuatrimestre.component';

describe('IniciarCuatrimestreComponent', () => {
  let component: IniciarCuatrimestreComponent;
  let fixture: ComponentFixture<IniciarCuatrimestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarCuatrimestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarCuatrimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
