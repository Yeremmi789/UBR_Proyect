import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatosPersonales, Verificar, buscarCorreo, datosEncontrados, respuestaDpreguntas, solicitudPreguntasBD } from './Reset';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private API_Laravel = environment.apiRest;
  private verificar = `${this.API_Laravel}/verificar`;
  private obtener_p = `${this.API_Laravel}/pedir`;

  constructor(private http:HttpClient) { }

  private _verificar!: DatosPersonales;
  
  // private _buscar!: buscarCorreo;
  private _buscar!: datosEncontrados;
  
  private _res_pregunta!: respuestaDpreguntas;

  correo:string = "";
  preguntaaa:string ="";
  respuestaa:string ="";

  datos: any[]=[];

  // guardar correo y obtenerlo para el siguiente módulo
  guardarCorreo(correo:string){
    this.correo = correo;
  }

  guardarDatos(data:any[]):void{
    this.datos = data;
  }
  obtsnerDatos():any[]{
    return this.datos;
  }

  obtenerCorreo():string{
    return this.correo;
  }
  // guardar correo y obtenerlo para el siguiente módulo

  // get verificarCorreo() {
  //   return { ...this._verificar }
  // }

    // obPregunta(){
    obPregunta(email:string){
    const co = this.obtenerCorreo();
    const ruta_API = `${this.API_Laravel}/pedir`;

    return this.http.post<solicitudPreguntasBD>(ruta_API,co)
    .pipe(
      map(respuesta =>{
        
          this._res_pregunta ={
            id: respuesta.id!,
            pregunta: respuesta.pregunta!,
            respuesta: respuesta.respuesta!,
          }

          return respuesta;
        
      }),
      catchError(xddd => of(false))
    );

  }

  
  obtenerPregunta():Observable<any[]>{
    // const obtener_p = `${this.API_Laravel}/pedir`;
    return this.http.get<any>(this.obtener_p);
  }

  verificarGmaillll(email: string){
    const verifica = `${this.API_Laravel}/verificar`;
    const body = {email};
    return this.http.post<buscarCorreo>(verifica,body)
    // post<buscarCorreo> // Aquí se pone la interface con los datos que va ainteractuar la BD laravel(controlador)
      .pipe(
        tap( respues => {
            if(respues.ok){
              this._buscar = {
                // this._buscar // es para que una vez se haya echo lo de post<...> se devuelva el mensaje de la BD
                // y pueda ver si se pudo realizar el envio o la peticion de los datos. :D
                // en otras palabras: lo que estamos usando para interactuar el formulario con la BD atravez de la interface creada 
                // en el archivo .ts
                id: respues.id!,
                email: respues.email!,
                // 

                pregunta: respues.pregunta!,
                respuesta: respues.respuesta!,
              }
            }
          }),
        map(resp => resp.ok),
          catchError(errorxdd =>of(false))
      )
    ;
  }



  // AMBAS FUNCIONAN - prefiero esta, es más facil
  // pedirCorreo(email: string) {
  //   const url = `${this.API_Laravel}/pedir`;
  //   const body = { email };
  //   return this.http.post<buscarCorreo>(url, body);
  // }

// AMBAS FUNCIONAN - prefiero la otra, es más facil
  pedirCorreo(email: string):Observable<any[]> {
    const url = `${this.API_Laravel}/pedir`;
    const body = { email };
    return this.http.post<any>(url, body);
  }

  vRespuesta(respuesta: string):Observable<any[]> {
    const url = `${this.API_Laravel}/verificarRespuesta`;
    const body = { respuesta };
    return this.http.post<any>(url, body);
  }

  cambiarCont(password: string, ide:number):Observable<any[]> {
    const url = `${this.API_Laravel}/newContrasena`;
    const body = { password,ide };
    return this.http.put<any>(url, body);
  }


  // Verfgmail(verfMail:Verificar){
  //   return this.http.post(this.verificar + "?store=1",verfMail);
  // }

}
