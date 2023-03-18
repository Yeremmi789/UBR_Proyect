import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  // constructor(private authService: AuthService,
  //       private router:Router
  //   ) { }
  constructor(private authService: AuthService,
    private router: Router
  ) { }


  canActivate(): Observable<boolean> | boolean {
    console.log('CanActivate');
    // return true;
    // return this.authService.validarToken();
    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          if (valid===false) {
            this.router.navigateByUrl('/auth/login');
            Swal.fire('No autorizado','Registrese primero >:v', 'error');
          }
          // return true;
        })
      );
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');
    // return true;  
    // return this.authService.validarToken();
    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          if (valid===false) {
            this.router.navigateByUrl('/auth/login');
            Swal.fire('No autorizado','Registrese primero >:v', 'error');
          }
          
          // return true;
        })
      );
  }


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

  //   // if (this.authService.auth.id) {
  //   //   return true;
  //   // }
  //   // // return true;
  //   // console.log('Bloqueado por el AuthGuard-CanActive');
  //   // return false;

  //   return this.authService.verificaAutentucacion()
  //   .pipe(
  //     tap( auntenticado =>{
  //         if(!auntenticado){
  //           this.router.navigate(['/auth/login']);
  //         }
  //       }
  //     )
  //   );


  // }




  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }








  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean>/*| Promise<boolean>*/| boolean {

  //   // // console.log('canLoad', true);
  //   // // console.log(route);
  //   // // console.log(segments);
  //   // if (this.authService.auth.id) {
  //   //   return true;
  //   // }
  //   // // return true;
  //   // console.log('Bloqueado por el AuthGuard - CanLoad');
  //   // return false;

  //   return this.authService.verificaAutentucacion()
  //   .pipe(
  //     tap( auntenticado =>{
  //         if(!auntenticado){
  //           this.router.navigate(['/auth/login']);
  //         }
  //       }
  //     )
  //   );

  // }
}
