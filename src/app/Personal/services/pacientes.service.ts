import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente, Token } from './Pacientes';
import { tap, Observable, of } from 'rxjs';
// import { Token } from '../../auth/services/Auth';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  // private API_Laravel: string = 'http://localhost:8000/api';
  private API_Laravel = environment.apiRest;
  

  private _paciente!: Paciente;


  constructor(private ClienteHttp_XD:HttpClient) { }

  MostrarUsuariosUwU():Observable<any>{
    const ruta_api = `${this.API_Laravel}/Allpacientes`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // return this.ClienteHttp_XD.get(this.API_JAJAJ);
    // return this.ClienteHttp_XD.get<Paciente>(ruta_api);
    return this.ClienteHttp_XD.get<Paciente>(ruta_api, { headers })
    .pipe(
      map(respuesta=>{
        // console.log(token);
        this._paciente={
          id: respuesta.id!,
          nombre: respuesta.nombre!,
          apellido_paterno: respuesta.apellido_paterno!,
          apellido_materno: respuesta.apellido_materno!,
          edad: respuesta.edad!,
          telefono: respuesta.telefono!,
          direccion: respuesta.direccion!,
        }
        return respuesta;
      }
      ),
      catchError(err => of(false))
    );
      
  }

  

}
