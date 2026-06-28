import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ArtistaService } from '../../services/artista.service';
import { Artista } from '../../model/artista';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router);
  private artistaService = inject(ArtistaService); 

  loginForm: FormGroup;
  mensajeError: string = '';

  constructor() {
    this.loginForm = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  iniciarSesion() {
    if (this.loginForm.valid) {
      const correoIngresado = this.loginForm.get('correo')?.value;
      const passwordIngresada = this.loginForm.get('password')?.value;

      this.artistaService.getArtistas().subscribe({
        next: (artistas: Artista[]) => {

          const usuarioEncontrado = artistas.find(
            a => a.correo === correoIngresado && a.password === passwordIngresada
          );

          if (usuarioEncontrado) {
            const primerNombre = usuarioEncontrado.nombres.split(' ')[0].toUpperCase();
            localStorage.setItem('usuarioLogueado', primerNombre);
            this.router.navigate(['/inicio']); 
          } else {
            this.mensajeError = 'Correo o contraseña incorrectos.';
          }
        },
        error: (err) => {
          console.error('Error conectando con la BD:', err);
          this.mensajeError = 'Error de conexión con el servidor.';
        }
      });

    } else {
      this.mensajeError = 'Por favor, complete los campos correctamente.';
      this.loginForm.markAllAsTouched();
    }
  }
}