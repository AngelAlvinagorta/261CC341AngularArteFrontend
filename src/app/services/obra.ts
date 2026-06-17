import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Obra } from '../model/obra';

@Injectable({
  providedIn: 'root',
})
export class ObraService {
  private http = inject(HttpClient);

  getObras(): Observable<Obra[]> {
    return this.http.get<Obra[]>(`${environment.url}/obra`);
  }

  registrarObra(obra: Obra): Observable<Obra> {
    return this.http.post<Obra>(`${environment.url}/obra`, obra);
  }

  actualizarObra(obra: Obra): Observable<Obra> {
    return this.http.put<Obra>(`${environment.url}/obra`, obra);
  }

  // Se elimina usando el Código de la Obra (String)
  eliminarObra(codigo: string): Observable<Obra> {
    return this.http.delete<Obra>(`${environment.url}/obra/${codigo}`);
  }
}