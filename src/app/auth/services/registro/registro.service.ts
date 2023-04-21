import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { Registros, Terapeutas } from './registro';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient,

    ) { }

  private API_Laravel = environment.apiRest;
  private ruta_API = `${this.API_Laravel}/allTerapias`;
  private preguntas = `${this.API_Laravel}/preguntas`;
  private ruta_registro =`${this.API_Laravel}/registro`;
  private _terapeutas!: Terapeutas;

  // obtenerTerapias(){
  //   return this.http.get<any[]>(this.ruta_API);
  // }
    obtenerTerapias():Observable<any[]>{
      return this.http.get<any>(this.ruta_API);
    }


    preguntass():Observable<any[]>{
      return this.http.get<any>(this.preguntas);
    }

    // registro(
    //   name: string,
    //   ap_p:string,
    //   ap_m:string,
    //   correo:string,
    //   password:string,
    //   edad:string,
    //   terapia:string,
    //   pregunta:string,
    //   respuesta:string,
    //   ){
    // const ruta_registro =`${this.API_Laravel}/registro`;
    // const body = { name,
    //   ap_p,
    //   ap_m,
    //   correo,
    //   password,
    //   edad,
    //   terapia,
    //   pregunta,
    //   respuesta};
      
    //   return this.http.post<Registros>(ruta_registro,body)
    //   .pipe(


    //     tap(respu=>{
    //       if(respu.ok){
    //         this._terapeutas={
    //           id:respu.id!,
    //           name:respu.name!,
    //           apellido_paterno:respu.apellido_paterno!,
    //           apellido_materno:respu.apellido_materno!,
    //           edad:respu.edad!,
    //           email:respu.email!,
    //           password:respu.password!,
    //           respuesta:respu.respuesta!,
    //           terapia_id:respu.terapia_id!,
    //           preguntas_id:respu.preguntas_id!,
  
    //         }
    //       }
          
    //     }),
    //     map(resp => resp.ok),
    //     catchError(error => of(error.mssg))
    //   );
    // }

    registro(datosTerapeutas:Terapeutas){
      return this.http.post(this.ruta_registro + "?store=1",datosTerapeutas);
    }

}
