import { Solicitud } from './solicitud';
import { Tecnica } from './tecnica';

export interface Obra {
  codigo: string;
  titulo: string;
  fechaRealizacion: string;
  dimensiones: string;
  estadoArtistico: string;
  motivoRechazo?: string;
  precioVenta?: number;
  porcentajeGanancia?: number;
  solicitud: Solicitud;
  tecnica: Tecnica;
}