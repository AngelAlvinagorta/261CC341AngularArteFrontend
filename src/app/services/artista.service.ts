import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Artista } from '../model/artista';

@Injectable({
  providedIn: 'root',
})
export class ArtistaService {
  private http = inject(HttpClient);

  getArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(`${environment.url}/artista`);
  }

  registrarArtista(artista: Artista): Observable<Artista> {
    return this.http.post<Artista>(`${environment.url}/artista`, artista);
  }

  actualizarArtista(artista: Artista): Observable<Artista> {
    return this.http.put<Artista>(`${environment.url}/artista`, artista);
  }

  eliminarArtista(dni: string): Observable<Artista> {
    return this.http.delete<Artista>(`${environment.url}/artista/${dni}`);
  }
}