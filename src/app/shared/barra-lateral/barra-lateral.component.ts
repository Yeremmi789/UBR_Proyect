import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent  implements OnInit{



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class. 
  }

  get auth(){
    return this.authService.usuario;
  }

  constructor(private rout:Router,
    private authService:AuthService){}


  logout(){
    
    this.authService.logout()
    this.rout.navigate(['/auth/login']);
  }

}
