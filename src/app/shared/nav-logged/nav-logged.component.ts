import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RolesService } from '../../auth/services/roles.service';
import { DatabaseService } from 'src/app/auth/services/database/database.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-logged',
  templateUrl: './nav-logged.component.html',
  styleUrls: ['./nav-logged.component.css']
})
export class NavLoggedComponent implements OnInit{
  
  roles: any[] = [];
  Rol: any;
  

  constructor(private authService:AuthService,
              private router:Router,
              private rolesService:RolesService,
              private http:HttpClient,

              private mensaje:ToastrService,
              private restoreBD:DatabaseService,
    ){
      
  }

  logout(){
    
    this.authService.logout()
    this.router.navigate(['/auth/login']);
  }

  


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.rolesService.ObtenerMisRoles()
      .subscribe(cont => {
        // console.log(cont);
        this.Rol = cont;
      });
  }


  respaldoManual(){
    // this.restoreBD.restauracionManual().subscribe({
    //   response => this.
    // });

    this.restoreBD.restauracionManual().subscribe(
      response =>{
        if(response == true){
          console.log("RESPALDO BD");
          this.mensaje.info("Respaldo de BD", "El respaldo fue todo un éxito :D",{
            timeOut:5000,
          });
        }else{
          console.log("NOOOOOOOOO");
          this.mensaje.warning("Algo salió mal", "Respaldo interrumpido :(",{
            timeOut:5000,
          });

          
        }
        // console.error('Algo salió mal');
      }
    );
  }


  restoreDatabase() {
    this.restoreBD.restauracionBD().subscribe(
      // response => this.mensaje = response['mensaje'],
      // error => console.error(error)
      // response =>{
      //   this.message = response.mensaje;
      //   console.log(response.ok);
      // },
      // error => console.error(error)

      (response) =>{
        console.log('Respaldo creado con exito');
      },
      (error)=>{
        console.log('Algo salió mal', error);
      }

    );
  }


  
}
