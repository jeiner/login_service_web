import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPeliculaComponent } from './registrar-pelicula.component';

describe('RegistrarPeliculaComponent', () => {
  let component: RegistrarPeliculaComponent;
  let fixture: ComponentFixture<RegistrarPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
