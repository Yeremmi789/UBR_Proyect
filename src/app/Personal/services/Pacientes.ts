export interface Paciente{
    
    id?:string;
    nombre:string;
    apellido_paterno:string;
    apellido_materno:string;
    edad:number;
    telefono:number;
    direccion:string;
    
    
    // token?:string;
}
export interface Token{
    ok:boolean;
    token?:string;
    mssg?:string;
    id?:string;
    name?:string;
    email?:string;
}