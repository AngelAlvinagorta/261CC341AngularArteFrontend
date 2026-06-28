import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { RegistrarArtista } from './components/registrar-artista/registrar-artista';
import { Inicio } from './components/inicio/inicio';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'inicio', component: Inicio },
  { path: 'registrar-artista', component: RegistrarArtista },
  { path: '**', redirectTo: 'login' }
];