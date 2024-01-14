import { PersonaModel } from "./persona.model";

export interface ProfileModel {
    id?:number;
    name:string;
    email:string;
    verified:boolean;
    persona?:PersonaModel;
}