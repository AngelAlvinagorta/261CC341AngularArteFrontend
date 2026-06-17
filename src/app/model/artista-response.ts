import { Sexo } from "./sexo";
import { TipoDocumento } from "./tipo-documento";
import { Ubigeo } from "./ubigeo";

export interface ArtistaResponse {
    idArtista: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    TipoDocumento: TipoDocumento;
    numeroDocumento: string;
    Sexo: Sexo;
    fechaNacimiento: Date;
    direccion: string;
    Ubigeo: Ubigeo;
    telefono: string;
    correo: string;
}
