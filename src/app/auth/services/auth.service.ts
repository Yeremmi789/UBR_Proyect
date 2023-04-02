import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// import { CookieService } from 'ngx-cookie-service/public-api';
import { JwtHelperService } from '@auth0/angular-jwt';


import { Auth, Token, Personal, DeleteToken } from './Auth';
import { User } from 'src/app/_models/user';


const helper = new JwtHelperService();

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost/API_php/angular/ubr_Proyect/';
  private API_Laravel: string = 'http://localhost:8000/api';

  private _usuario!: Personal;

  private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;


  get usuario() {
    return { ...this._usuario }
  }

  constructor(private http: HttpClient, private router:Router
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
  }

  public get userValue() {
        return this.userSubject.value;
    }

  login(name: string, password: string) {
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
            localStorage.setItem('user', JSON.stringify(resp));
          }
        }),
        map(resp => resp.ok),
        catchError(error => of(error.mssg))
      );
  }

  validarToken(): Observable<boolean> {
    const url = `${this.API_Laravel}/validarToken`;

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.get<Token>(url, { headers })
      .pipe(
        map(resp =>{
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
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


}
