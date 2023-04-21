import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { citaI } from './citas';


@Injectable({
  providedIn: 'root'
})
export class ServiceCitasService {

  //url:string='http://127.0.0.1:8000/api/pacientes';
  URLCita:string='http://127.0.0.1:8000/api/cita' ;
  constructor(private citaHttp:HttpClient) { }
 
  registrarCita(cita:citaI):Observable<any>{
    return this.citaHttp.post(this.URLCita + "?store=1",cita);
  }

  MostrarCitas(){
    return this.citaHttp.get(this.URLCita);
  }

}
