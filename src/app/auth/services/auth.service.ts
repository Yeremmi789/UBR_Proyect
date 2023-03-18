import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// import { CookieService } from 'ngx-cookie-service/public-api';
import { JwtHelperService } from '@auth0/angular-jwt';


import { Auth, Token, Personal, DeleteToken } from './Auth';


const helper = new JwtHelperService();

// import { isNullOrUndefined, isNullOrUnderfined } from 'util';
// import { isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost/API_php/angular/ubr_Proyect/';
  private API_Laravel: string = 'http://localhost:8000/api';

  private _auth: Auth | undefined;

  private _usuario!: Personal;

  private _logout!: DeleteToken;

  // get auth():Auth{
  //   return {...this._auth! }
  // }

  get usuario() {
    return { ...this._usuario }
  }

  // private saveToken(token: string): void { }

  // private checkToken(): void {
  //   const userToken = localStorage.getItem('token');
  //   const isExpired = helper.isTokenExpired(userToken);
  //   console.log('isExpired => ', isExpired);
  //   // userIsLogged = false
  // }

  constructor(private http: HttpClient,
    // private cookies:CookieService
  ) {
    // this.checkToken();

  }

  // verificaAutentucacion(): Observable<boolean> {
  //   if (!localStorage.getItem('token')) {
  //     return of(false);
  //   }
  //   const token = localStorage.getItem('token');
  //   // const ruta_api =`${this.API_Laravel}/buscar_trabajador`;
  //   const ruta_api = `${this.API_Laravel}/validarToken`;
  //   // return this.http.get<Personal>(`${this.API_Laravel}/buscar_trabajador/4`)
  //   return this.http.post<Token>(ruta_api, token)
  //     .pipe(
  //       map(auth => {
  //         console.log('map', auth);
  //         return true;
  //       })
  //     );
  // }

  login(name: string, password: string) {

    // // return this.http.get(`${this.API_Laravel}/buscar_trabajador/4`);
    // return this.http.get<Auth>(`${this.API_Laravel}/buscar_trabajador/4`)
    // .pipe(
    //   // tap(resp =>console.log('AUTHSERVICE',resp))
    //   tap(auth => this._auth = auth),
    //   tap(auth => localStorage.setItem('id', auth.id)),
    // );

    const ruta_api = `${this.API_Laravel}/login`;
    const body = { name, password };

    return this.http.post<Token>(ruta_api, body)
      .pipe(
        tap(resp => {
          // console.log(resp)
          if (resp.ok) {
            localStorage.setItem('token', resp.token!)
            this._usuario = {
              name: resp.name!,
              id: resp.id!,
            }
          }
        }),
        map(resp => resp.ok),
        // catchError( err => /*of(false)*/ of(err))
        catchError(error => of(error.mssg))
      );
  }

  validarToken(): Observable<boolean> {
    // const url = `${this.API_Laravel}/validarToken`;
    // const url = `${this.API_Laravel}/validarToken`;
    // const url = `${this.API_Laravel}/userprofile`;
    // const url = `${this.API_Laravel}/me`;
    const url = `${this.API_Laravel}/validarToken`;

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      // .set('x-token', localStorage.getItem('token') || '');
      // .set('Bearer Token', localStorage.getItem('token') || '');
      // .set('Authorization', localStorage.getItem('token')|| '');
      // const he = localStorage.getItem('token');
      .set('Authorization', `Bearer ${token}`);

    // const headerss = new Headers({
    //   'Authorization': 'Bearer'+localStorage.getItem('token'),
    // })

    // return this.http.post<Token>( url, he)
    return this.http.get<Token>(url, { headers })
      .pipe(
        map(resp =>{
            // localStorage.setItem('token', resp.token!)
            console.log(token);
            this._usuario = {
              name: resp.name!,
              id: resp.id!
            }
          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }
  logout(){
    // localStorage.delete('token',resp.token!)
    // const url = `${this.API_Laravel}/me`;
    // this._auth = undefined;
    // const url = `${this.API_Laravel}/logout`;
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders()
    // .set('Authorization', `Bearer ${token}`);

    // // return this.http.post<DeleteToken>(url, {headers});
    // return this.http.post<DeleteToken>(url, { headers })
    // .pipe(
    //   map(
    //     respuesta =>{
    //       localStorage.removeItem('token');
    //       console.log(respuesta.message);
    //       return respuesta.ok;
    //       // return respuesta.message;
    //     }
    //   ),
    //   catchError(err => of(false))
    // );
    localStorage.removeItem('token');
  }


  // veri():Observable<boolean>{
  //   if(localStorage.getItem('token')){

  //   }
  // }





}
