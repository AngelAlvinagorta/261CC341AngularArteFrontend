import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], 
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router);

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
      console.log('Credenciales ingresadas:', this.loginForm.value);
      this.router.navigate(['/registrar-artista']); 
    } 
    else {
      this.mensajeError = 'Por favor, ingrese un correo válido y su contraseña.';
      this.loginForm.markAllAsTouched();
    }
  }
}