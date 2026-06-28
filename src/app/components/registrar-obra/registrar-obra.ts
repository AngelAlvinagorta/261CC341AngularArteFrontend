import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ObraService } from '../../services/obra.service';
import { Router } from '@angular/router';
import { Obra } from '../../model/obra';

@Component({
  selector: 'app-registrar-obra',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-obra.html',
  styleUrls: ['./registrar-obra.css']
})
export class RegistrarObra implements OnInit {
  private obraService = inject(ObraService);
  private router = inject(Router);

  obraForm!: FormGroup;
  dniArtistaLogueado: string | null = '';

  // Tipos de obra
  listaTipos = ['Pintura', 'Escultura', 'Cerámica', 'Telar', 'Otros'];
  
  // Códigos de técnica
  listaTecnicas = [
    { codigo: 'OL', nombre: 'Óleo' },
    { codigo: 'ES', nombre: 'Escultura / Modelado' },
    { codigo: 'AC', nombre: 'Acuarela' },
    { codigo: 'GR', nombre: 'Grabado' },
    { codigo: 'MU', nombre: 'Mural' }
  ];

  ngOnInit(): void {
    this.dniArtistaLogueado = localStorage.getItem('dniUsuarioLogueado');

    // Verificar si el artista ha iniciado sesión
    if (!this.dniArtistaLogueado) {
      alert('Debe iniciar sesión para registrar una obra.');
      this.router.navigate(['/login']);
      return;
    }

    this.obraForm = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
      tipo: new FormControl('', [Validators.required]),
      dimensiones: new FormControl('', [Validators.required]),
      tecnica: new FormControl('', [Validators.required]),
      fechaRealizacion: new FormControl('', [Validators.required])
    });
  }

  registrarObra() {
    // Verificar si el formulario es válido
    if (this.obraForm.valid && this.dniArtistaLogueado) {
      
      const nuevaObra = {
        titulo: this.obraForm.get('titulo')?.value,
        tipo: this.obraForm.get('tipo')?.value,
        fechaRealizacion: this.obraForm.get('fechaRealizacion')?.value,
        dimensiones: this.obraForm.get('dimensiones')?.value,
        tecnica: { codigo: this.obraForm.get('tecnica')?.value },
        artista: { dni: this.dniArtistaLogueado }
      } as Obra;

      // Llamada al servicio para registrar la obra
      this.obraService.registrarObra(nuevaObra).subscribe({
        next: (response) => {
          alert(`Obra registrada con éxito.\n
            Código de la obra: ${response.codigo}\n`);
          this.obraForm.reset({ tipo: '', tecnica: '' });
        },
        error: (err) => {
          console.error('Error al comunicarse con Spring Boot:', err);
          alert('Error al registrar la obra. Asegúrate de que el backend esté encendido.');
        }
      });

    } else {
      this.obraForm.markAllAsTouched();
    }
  }
  // Cancelar el registro y al inicio
  cancelar() {
    this.router.navigate(['/inicio']);
  }
}
