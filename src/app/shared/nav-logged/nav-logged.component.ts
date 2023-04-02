import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RolesService } from '../../auth/services/roles.service';

@Component({
  selector: 'app-nav-logged',
  templateUrl: './nav-logged.component.html',
  styleUrls: ['./nav-logged.component.css']
})
export class NavLoggedComponent {

  constructor(private authService:AuthService,
              private router:Router,
              private rolesService:RolesService,
              private http:HttpClient
    ){
      
  }

  logout(){
    
    this.authService.logout()
    this.router.navigate(['/auth/login']);
  }

}
