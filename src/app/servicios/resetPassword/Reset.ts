export interface Verificar{
    ok:boolean;
    email?:string;
    msg?:string;
    respuesta?:string;
    pregunta_id?:string;
    id?:string;
}
// ************************************************
export interface buscarCorreo{
    id?:number;
    email?:string;
    ok:boolean;
    // 

    pregunta?:string;
    respuesta?:string;
}

export interface datosEncontrados{
    Msg?:string;
    // ok:boolean;
    id?:number;
    email?:string;
    // 
    pregunta?:string;
    respuesta?:string;
}// ************************************************

// ************************************************
export interface solicitudPreguntasBD{
    ok:boolean;
    id?:number;
    pregunta?:string;
    respuesta?:string;
}

export interface respuestaDpreguntas{
    id?:number;
    pregunta?:string;
    respuesta?:string;
}
// ************************************************



export interface DatosPersonales{
    id?:string;
    name?:string;
    email?:string;
    respuesta?:string;
    password?:string;
    pregunta_id?:string;
}


