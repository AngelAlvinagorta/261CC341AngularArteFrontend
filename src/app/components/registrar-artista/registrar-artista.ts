import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArtistaService } from '../../services/artista.service';
import { Artista } from '../../model/artista';

@Component({
  selector: 'app-registrar-artista',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrar-artista.html',
  styleUrls: ['./registrar-artista.css'],
})
export class RegistrarArtista implements OnInit {
  private artistaService = inject(ArtistaService);
  private cdr = inject(ChangeDetectorRef);

  artistas: Artista[] = [];
  artistaForm: FormGroup;
  isEdited: boolean = false;

  listaSexos = [
    { id: 'M', descripcion: 'Masculino' },
    { id: 'F', descripcion: 'Femenino' },
    { id: 'OTRO', descripcion: 'Otro' }
  ];

  constructor() {
    this.artistaForm = new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      direccion: new FormControl('', [Validators.required]),
      sexo: new FormControl('M', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.getArtistas();
  }

  getArtistas(): void {
    this.artistaService.getArtistas().subscribe(
      (result: Artista[]) => {
        console.log('Artistas cargados:', result);
        this.artistas = result;
        this.cdr.detectChanges();
      }
    );
  }

  registrarArtista() {
    if (this.artistaForm.valid) {
      const nuevoArtista: Artista = this.artistaForm.value;
      
      this.artistaService.registrarArtista(nuevoArtista).subscribe({
        next: (response) => {
          console.log('Artista registrado con éxito', response);
          this.getArtistas();
          this.refreshForm();
        },
        error: (err) => {
          console.error('Error al registrar el artista', err);
          alert('Hubo un error al registrar. Revisa la consola.');
        }
      });
    } else {
      this.artistaForm.markAllAsTouched(); 
    }
  }

  refreshForm() {
    this.artistaForm.reset({ sexo: 'M' });
    this.isEdited = false;
  }
}