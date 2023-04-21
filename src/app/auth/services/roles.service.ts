import { Injectable } from '@angular/core';
import { Auth, Token, Personal, DeleteToken, Roles } from './Auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private userSubject: BehaviorSubject<User | null>;
  public user:Observable<User | null>;

  // private API_Laravel: string = 'http://localhost:8000/api';
  // private api: string = 'http://localhost:8000/api/Allroles';

  private API_Laravel = environment.apiRest;

  data_t = localStorage.getItem('token');
  headersModo = new HttpHeaders().set('Authorization', `Bearer ${this.data_t}`);

  constructor(private http:HttpClient,
            private router:Router
    ) {
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();
    }

  private _usuario!: Personal;

  get usuario() {
    return { ...this._usuario }
  }

  ObtenerMisDatos(){
    const ruta_API = `${this.API_Laravel}/misDatos`;
    const data_token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${data_token}`);
    return this.http.get<Personal>(ruta_API, {headers})
      .pipe(
        map( respues=>{
            this._usuario={
              id: respues.id!,
              name: respues.name!,
              roles_id: respues.roles_id!,
            }
            return respues;
          }),
          catchError(errorxdd =>of(false))
      )
    ;
  }

  ObtenerMisRoles(){
    const ruta_API = `${this.API_Laravel}/MisRoles`;
    const data_token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${data_token}`);
    return this.http.get<Personal>(ruta_API, {headers})
      .pipe(
        map( respues=>{
            this._usuario={
              id: respues.id!,
              name: respues.name!,
              roles_id: respues.roles_id!,
            }
            return respues;
          }),
          catchError(errorxdd =>of(false))
      )
    ;
  }


  ObtenerRoles(){
    const ruta_API = `${this.API_Laravel}/Allroles`;
    const data_token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${data_token}`);
    return this.http.get<Roles>(ruta_API, {headers})
      .pipe(
        map( respues=>{
            this._usuario={
              id: respues.id!,
              name: respues.nombre!,
            }
            return respues;
          }),
          catchError(errorxdd =>of(false))
      )
    ;
  }


  




}
