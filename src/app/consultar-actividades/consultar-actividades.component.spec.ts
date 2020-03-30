import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarActividadesComponent } from './consultar-actividades.component';

describe('ConsultarActividadesComponent', () => {
  let component: ConsultarActividadesComponent;
  let fixture: ComponentFixture<ConsultarActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
