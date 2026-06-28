import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarObra } from './registrar-obra';

describe('RegistrarObra', () => {
  let component: RegistrarObra;
  let fixture: ComponentFixture<RegistrarObra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarObra],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarObra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
