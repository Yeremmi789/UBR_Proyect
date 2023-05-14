import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Terapeutas } from 'src/app/auth/services/registro/registro';
import { citaI } from '../citas';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http:HttpClient,) { }
  private API_Laravel = environment.apiRest;
  private _terapeutas!: Terapeutas;

  obtenerTerapias():Observable<any[]>{
    const ruta_API = `${this.API_Laravel}/allTerapias`;
    return this.http.get<any>(ruta_API);
  }

  obtenerTerapeutas():Observable<any[]>{
    const ruta_API = `${this.API_Laravel}/allTerapeutas`;
    return this.http.get<any>(ruta_API);
  }

  verificarPaciente(consulta: string) {
    return this.http.get('/api/usuarios?consulta=' + consulta);
  }

  registro(datosCitas:citaI){
    const ruta_API = `${this.API_Laravel}/addCitas`;
    return this.http.post(ruta_API + "?store=1",datosCitas);
  }


  buscarPacientes(consulta: string): Observable<any> {
    const url = `${this.API_Laravel}/verEnfermo`;
    const body = { consulta: consulta };
    return this.http.post<any>(url, body);
  }



}
