import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrarArtista } from './components/registrar-artista/registrar-artista';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistrarArtista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('261CC341AngularArteFrontend');
}
