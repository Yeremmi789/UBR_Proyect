export class Auth{
    // Aqui se toma encuenta el nombre de los campos que están
    // en la base de datos
    id!:string;
    name!:string;
    email!:string;
    password!:string;
};

// export class Token{
//     token!:string;
//     mssg!:string;
//     ok!:boolean;
// }

export interface Token{
    ok:boolean;
    token?:string;
    mssg?:string;
    id?:string;
    name?:string;
    email?:string;
}

export interface Personal{
    id?:string;
    name?:string;
    email?:string;
    password?:string;
}


export interface DeleteToken{
    ok:boolean;
    message?:string;
}