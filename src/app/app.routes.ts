import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Inicio } from './components/inicio/inicio';
import { RegistrarArtista } from './components/registrar-artista/registrar-artista';
import { RegistrarObra } from './components/registrar-obra/registrar-obra'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'inicio', component: Inicio },
  { path: 'registrar-artista', component: RegistrarArtista },
  { path: 'registrar-obra', component: RegistrarObra }, 
  { path: '**', redirectTo: 'login' } 
];