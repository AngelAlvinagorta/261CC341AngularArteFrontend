import { Artista } from './artista';

export interface Solicitud {
  numero: string;
  fecha: string;
  estado: string;
  motivoRechazo?: string;
  artista: Artista;
}