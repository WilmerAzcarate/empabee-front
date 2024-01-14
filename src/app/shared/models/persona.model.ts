import { GeneroEnum } from "../enums/genero.enum";

export interface PersonaModel {
    id?:number;
    primerNombre:string;
    segundoNombre?:string;
    primerApellido:string;
    segundoApellido?:string;
    genero:GeneroEnum;
    telefono:string;
    numeroIdentificacion:string;
    urlImagen?:string;
}