import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArtistaService } from '../../services/artista.service';
import { Artista } from '../../model/artista';
import { Router } from '@angular/router';

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
  private router = inject(Router);

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
      nombres: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(2)]),
      direccion: new FormControl('', [Validators.required]),
      sexo: new FormControl('M', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validators: this.validarPassword });
  }

  validarPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    return null;
  }

  ngOnInit(): void {
    this.getArtistas();
  }

  getArtistas(): void {
    this.artistaService.getArtistas().subscribe(
      (result: Artista[]) => {
        this.artistas = result;
        this.cdr.detectChanges();
      }
    );
  }

  registrarArtista() {
    if (this.artistaForm.valid) {
      const { confirmPassword, ...nuevoArtista } = this.artistaForm.value;
      
      this.artistaService.registrarArtista(nuevoArtista as Artista).subscribe({
        next: (response) => {
          this.getArtistas();
          this.refreshForm();
        },
        error: (err) => {
          console.error('Error al registrar el artista', err);
          alert('Error: Asegúrate de que el backend esté actualizado con los nuevos campos.');
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

  cancelarRegistro() {
  this.artistaForm.reset({ sexo: 'M' });
  this.isEdited = false;
  this.router.navigate(['/login']);
  } 
}