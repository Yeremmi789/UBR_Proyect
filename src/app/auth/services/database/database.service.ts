import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Restored } from './Database';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private api_Laravel = environment.apiRest;

  constructor(
    private http:HttpClient,
    private router:Router,

    private mensaje:ToastrService
  ) { }

  // private _restored!: Restored;

  // get usuario(){
  //   return {...this._restored}
  // }


    restauracionManual(){
      // return this.http.post(this.api_Laravel,{});
      const ruta_Api = `${this.api_Laravel}/respaldoManual`;
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      // Esto de aquí está incompleto, debido a que necesita un espacio donde mande algo aparte del token
      // return this.http.post(this.api_Laravel,{headers});

      // y se necesita dejar un espacio en blanco por medio de corchetes "{}"
      // return this.http.post<Restored>(ruta_Api,{},{headers})

      // O en lugar de los corchetes se aplica null :D
      return this.http.post<Restored>(ruta_Api,null,{headers})
      .pipe(
        // tap(respuesta=>{
        //   if(respuesta.ok){
            
        //   }
        // }),
        map(respuesta=> respuesta.ok),
        catchError(error => of(error.mensaje))
      );
    }



    restauracionBD(){
      const ruta_Api = `${this.api_Laravel}/respaldoManual`;
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      // Esto de aquí está incompleto, debido a que necesita un espacio donde mande algo aparte del token
      // return this.http.post(ruta_Api, {headers});

      // y se necesita dejar un espacio en blanco por medio de corchetes "{}"
      return this.http.post(ruta_Api,{}, {headers});

      // O en lugar de los corchetes se aplica null :D
      // return this.http.post(ruta_Api,null, {headers});
    }

}
