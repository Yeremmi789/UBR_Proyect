import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Paciente, Token } from './Pacientes';
import { tap, Observable, of } from 'rxjs';
// import { Token } from '../../auth/services/Auth';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from './Usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private API_Laravel = environment.apiRest;
  

  private _usuario!: Usuario;


  constructor(private ClienteHttp_XD:HttpClient) { }

  listUsuarios():Observable<any>{
    const ruta_api = `${this.API_Laravel}/AllUsuarios`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.ClienteHttp_XD.get<Usuario>(ruta_api, { headers })
    .pipe(
      map(respuesta=>{
        // console.log(token);
        this._usuario={
          id: respuesta.id!,
          name: respuesta.name!,
          apellido_paterno: respuesta.apellido_paterno!,
          apellido_materno: respuesta.apellido_materno!,
          edad: respuesta.edad!,
          terapia: respuesta.terapia!,
          rol: respuesta.rol!,
        }
        return respuesta;
      }
      ),
      catchError(err => of(false))
    );
  }
}
