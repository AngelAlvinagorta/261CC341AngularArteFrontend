import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Solicitud } from '../model/solicitud';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  private http = inject(HttpClient);

  getSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${environment.url}/solicitud`);
  }

  registrarSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(`${environment.url}/solicitud`, solicitud);
  }

  actualizarSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.put<Solicitud>(`${environment.url}/solicitud`, solicitud);
  }

  // Se elimina usando el Número de Solicitud (String)
  eliminarSolicitud(numero: string): Observable<Solicitud> {
    return this.http.delete<Solicitud>(`${environment.url}/solicitud/${numero}`);
  }
}