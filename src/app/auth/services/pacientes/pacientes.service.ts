import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pacienteI } from '../registro/pacientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private API_Laravel = environment.apiRest;
  private ruta_API = `${this.API_Laravel}/registrarPaciente`;
  constructor(
    private http:HttpClient,) { }

    registroPacientes(datospaciente:pacienteI):Observable<any>{
      return this.http.post(this.ruta_API + "?store=1",datospaciente);
    }
}
