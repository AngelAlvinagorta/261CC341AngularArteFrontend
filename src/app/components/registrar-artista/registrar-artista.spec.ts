import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegistrarArtista } from './registrar-artista';

describe('RegistrarArtista', () => {
  let component: RegistrarArtista;
  let fixture: ComponentFixture<RegistrarArtista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarArtista, HttpClientTestingModule] 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarArtista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});