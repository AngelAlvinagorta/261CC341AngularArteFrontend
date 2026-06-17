import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tecnica } from '../model/tecnica';

@Injectable({
  providedIn: 'root',
})
export class TecnicaService {
  private http = inject(HttpClient);

  getTecnicas(): Observable<Tecnica[]> {
    return this.http.get<Tecnica[]>(`${environment.url}/tecnica`);
  }

  registrarTecnica(tecnica: Tecnica): Observable<Tecnica> {
    return this.http.post<Tecnica>(`${environment.url}/tecnica`, tecnica);
  }

  actualizarTecnica(tecnica: Tecnica): Observable<Tecnica> {
    return this.http.put<Tecnica>(`${environment.url}/tecnica`, tecnica);
  }
  
  eliminarTecnica(codigo: string): Observable<Tecnica> {
    return this.http.delete<Tecnica>(`${environment.url}/tecnica/${codigo}`);
  }
}
