import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Auth } from '../../auth/services/Auth';

import Swal from 'sweetalert2';
import { RolesService } from 'src/app/auth/services/roles.service';
import { ToastrService } from 'ngx-toastr';

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

// Para mostrar u ocultar el boton de iniciar o cerrar sesion:
  _NotieneToken = true;
// Para mostrar u ocultar el boton de iniciar o cerrar sesion:


  constructor(private rout:Router,
    private authService:AuthService,
    private rolesService:RolesService,
    private mensaje:ToastrService,
    ){}

// Para mostrar u ocultar el boton de iniciar o cerrar sesion:
    checkLocalStorage(){      
      if(localStorage.getItem('token')){
        this._NotieneToken = false;
      }else{
        this._NotieneToken = true;
      }
    }
// Para mostrar u ocultar el boton de iniciar o cerrar sesion:


    
  ngOnInit(): void {
    this.rolesService.ObtenerRoles()
      .subscribe(r => {
        // console.log(r);
        this.Roles = r;
      });
    this.rolesService.ObtenerMisDatos()
      .subscribe(contenido => {
        // console.log(contenido);
        this.Usuario = contenido;
      });

    this.rolesService.ObtenerMisRoles()
      .subscribe(cont => {
        // console.log(cont);
        this.Rol = cont;
      });

      this.checkLocalStorage();
      // this.ocultar();
  }

  logout(){
    this.authService.logout()
    this.rout.navigate(['/auth/login']);

    
  }


}
