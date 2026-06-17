import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarArtista } from './registrar-artista';

describe('RegistrarArtista', () => {
  let component: RegistrarArtista;
  let fixture: ComponentFixture<RegistrarArtista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarArtista],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarArtista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
