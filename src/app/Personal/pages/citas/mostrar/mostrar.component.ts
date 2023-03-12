import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent {

  constructor(private router:Router) {}

  // logout(){
  //   this.router.navigateByUrl('auth/login')
  // }

}
