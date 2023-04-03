import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
// import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService,
    private router: Router,
    private mensaje:ToastrService
  ) { }


  canActivate(): Observable<boolean> | boolean {
    console.log('CanActivate');
    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          if (valid===false) {
            this.mensaje.error("Ruta no permitida","No autorizado");
            this.mensaje.warning("Ruta no permitida","No autorizado");
            this.router.navigateByUrl('/auth/login');
            // Swal.fire('No autorizado','Acceso privado', 'error');
          }
        })
      );
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');
    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          if (valid===false) {
            this.mensaje.error("Ruta no permitida","No autorizado");
            this.mensaje.warning("Ruta no permitida","No autorizado",{
              timeOut:10000,
              positionClass: 'toast-top-right',
            });
            this.router.navigateByUrl('/auth/login');
            // Swal.fire('No autorizado','Acceso privado', 'error');
            
          }
          // return true;
        })
      );
  }
}
