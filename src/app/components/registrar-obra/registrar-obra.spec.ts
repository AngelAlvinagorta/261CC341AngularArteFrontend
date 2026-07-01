import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarObra } from './registrar-obra';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';

describe('RegistrarObra', () => {
  let component: RegistrarObra;
  let fixture: ComponentFixture<RegistrarObra>;

  beforeEach(async () => {
    // Sintaxis de Vitest para espiar el LocalStorage
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('12345678');

    await TestBed.configureTestingModule({
      imports: [RegistrarObra],
      providers: [
        provideHttpClient(), 
        provideRouter([])    
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarObra);
    component = fixture.componentInstance;
    
    fixture.detectChanges(); 
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});