import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Auth } from '../../auth/services/Auth';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  // auth!:Auth; //undefined

  // get auth(){
  //   return this.authService.auth;
  // }
  // El nombre de esta funcion GET se puede poner lo que sea, lo importante 
  // es el contenido en el return
  get auth(){
    return this.authService.usuario;
  }
// El nombre de esta funcion GET se puede poner lo que sea, lo importante 
  // es el contenido en el return

  constructor(private rout:Router,
    private authService:AuthService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  logout(){
    this.rout.navigate(['/auth/login']);
  }


}
