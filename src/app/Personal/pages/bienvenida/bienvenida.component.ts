import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {

  constructor(private authService:AuthService,
              private router:Router
    ){}

  logout(){
    
    this.authService.logout()
    this.router.navigate(['/auth/login']);
  }
}
