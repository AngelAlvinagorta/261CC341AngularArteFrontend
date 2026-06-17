import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ArtistaRequest } from '../model/artista-request';
import { ArtistaResponse } from '../model/artista-response';

@Injectable({
    providedIn: 'root',
})
export class ArtistaService {
    private http = inject(HttpClient);

    getArtista(): Observable<ArtistaResponse[]> {
        return this.http.get<ArtistaResponse[]>(`${environment.url}/artista`);
    }
}
