import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { RolesService } from '../auth/services/roles.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  Rol: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,

      private authService:AuthService,
      private rolesService:RolesService,
      private http:HttpClient,
      private mensaje:ToastrService,
      private router:Router
    ) {}

    ngOnInit(): void {
      this.rolesService.ObtenerMisRoles()
      .subscribe(cont => {
        console.log(cont);
        this.Rol = cont;
      });
    }

    logout() {

      this.authService.logout()
      this.router.navigate(['/auth/login']);
    }

}
