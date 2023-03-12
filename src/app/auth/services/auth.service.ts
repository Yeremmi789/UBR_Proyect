import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of} from 'rxjs';


import {map} from 'rxjs/operators';
import { Auth, Token, Personal } from './Auth';
// import { isNullOrUndefined, isNullOrUnderfined } from 'util';
// import { isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost/API_php/angular/ubr_Proyect/';
  private API_Laravel: string = 'http://localhost:8000/api';

  private _auth:Auth | undefined;

  private _usuario!:Personal;

  // get auth():Auth{
  //   return {...this._auth! }
  // }

  get usuario(){
    return {...this._usuario }
  }

  constructor(private http:HttpClient) { }

  // verificaAutentucacion():Observable<boolean> {
  //   if(!localStorage.getItem('id')){
      
  //     return of(false);
  //   }

  //   return this.http.get<Auth>(`${this.API_Laravel}/buscar_trabajador/4`)
  //     .pipe(
  //       map(auth => {
  //         console.log('map', auth);
  //         return true;
  //       })
  //     );

  // }

  login(name:string, password:string){
    
    // // return this.http.get(`${this.API_Laravel}/buscar_trabajador/4`);
    // return this.http.get<Auth>(`${this.API_Laravel}/buscar_trabajador/4`)
    // .pipe(
    //   // tap(resp =>console.log('AUTHSERVICE',resp))
    //   tap(auth => this._auth = auth),
    //   tap(auth => localStorage.setItem('id', auth.id)),
    // );

    const ruta_api =`${this.API_Laravel}/login`;
    const body = { name, password};

    return this.http.post<Token>(ruta_api,body)
    .pipe(
        tap(resp => {
          // console.log(resp)
          if(resp.ok){
            this._usuario = {
              name: resp.name!,
              id: resp.id!,
            }
          }
        }),
        map( resp => resp.ok),
        catchError( err => of(false))
      );

    
  }

  logout(){
    
    this._auth= undefined;
  }

    
}
