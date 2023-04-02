import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Auth } from '../../auth/services/Auth';

import Swal from 'sweetalert2';
import { RolesService } from 'src/app/auth/services/roles.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  get auth(){
    return this.authService.usuario;
  }

  Rol: any;
  Roles: any;
  Usuario: any;
  
  constructor(private rout:Router,
    private authService:AuthService,
    private rolesService:RolesService
    ){}

  ngOnInit(): void {
    this.rolesService.ObtenerRoles()
      .subscribe(r => {
        console.log(r);
        this.Roles = r;
      });
    this.rolesService.ObtenerMisDatos()
      .subscribe(contenido => {
        console.log(contenido);
        this.Usuario = contenido;
      });

    this.rolesService.ObtenerMisRoles()
      .subscribe(cont => {
        console.log(cont);
        this.Rol = cont;
      });
  }

  logout(){
    this.authService.logout()
  this.rout.navigate(['/auth/login']);
  }


}
