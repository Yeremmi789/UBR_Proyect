export interface Usuario{
    
    id?:string;
    name:string;
    apellido_paterno:string;
    apellido_materno:string;
    edad:number;
    rol:string;
    terapia:string;
}
export interface Token{
    ok:boolean;
    token?:string;
    mssg?:string;
    id?:string;
    name?:string;
    email?:string;
}
