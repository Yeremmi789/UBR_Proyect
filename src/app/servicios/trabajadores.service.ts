import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {trabajadores_clase} from './trabajadores';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  // direccion_API: string = "http://localhost/API_php/angular/ubr_Proyect/trabajadores/";
  // API_Laravel: string = 'http://localhost:8000/api/';
  private API_Laravel = environment.apiRest;


  constructor(private http:HttpClient) { }

  // agregar(agg_trab:trabajadores_clase):Observable<any>{
  //   return this.http.post(this.direccion_API+"?insertar=1",agg_trab)
  // }

  mostrarTrabajadores(){
    // return this.http.get(this.direccion_API);
  }


}
