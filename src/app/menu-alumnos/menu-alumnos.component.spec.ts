import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlumnosComponent } from './menu-alumnos.component';

describe('MenuAlumnosComponent', () => {
  let component: MenuAlumnosComponent;
  let fixture: ComponentFixture<MenuAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
