export class Registros{
    // Aqui se toma encuenta el nombre de los campos que están
    // en la base de datos
    id!:string;
    name!:string;
    apellido_paterno!:string;
    apellido_materno!:string;
    email!:string;
    password!:string;
    edad!:number;
    terapia_id!:number;
    preguntas!:number;
    respuesta_id!:string;
};


export interface Terapeutas{
    id?:string;
    name?:string;
    apellido_paterno?:string;
    apellido_materno?:string;
    email?:string;
    password?:string;
    edad?:number;
    // Quitar si la aplicación no funciona
    roles_id?:string;
    terapia_id?:number;
    preguntas?:number;
    respuesta?:string;
    // Quitar si la aplicación no funciona
}