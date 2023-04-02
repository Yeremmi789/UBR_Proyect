import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { CustomRoute } from 'src/app/_models/custom-route';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanLoad, CanActivate  {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;
    if (user) {
      const { roles } = route.data;
      if (roles && !roles.includes(user.role)) {
        this.router.navigate(['/personal/Pacientes/ver']);
        Swal.fire({
          title: '<strong>No autorizado</strong>',
          icon: 'info',
          html:
            'Necesita ser <b>Administrador</b> <br>' +
            'Fue redireccionado a otra ventana',
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Esta bien!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
        })
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/login'])
    Swal.fire('No autorizado', 'Solo para administradores', 'error');
    return false;
  }

  canLoad(route: CustomRoute, segments: UrlSegment[]) {
    const user = this.authService.userValue;
    if (user) {
      const { roles } = route.data;
      if (roles && !roles.includes(user.role)) {
        this.router.navigate(['/personal/Pacientes/ver']);
        Swal.fire({
          title: '<strong>No autorizado</strong>',
          icon: 'info',
          html:
            'Necesita ser <b>Administrador</b> <br>' +
            'Fue redireccionado a otra ventana',
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Esta bien!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
        })
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/login'])
    Swal.fire('No autorizado', 'Está evadiendo los permisos >:c', 'error');
    return false;
  }
}