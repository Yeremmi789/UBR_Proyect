import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../../../services/pacientes.service';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  Paciente:any;

  constructor(private router:Router, 
    private authService:AuthService,
    private servicio:PacientesService) {}

    ngOnInit(): void {

      this.servicio.MostrarUsuariosUwU()
      .subscribe(resp=>{
        console.log(resp);
        this.Paciente=resp;
      });

    }

    logout(){
    
      this.authService.logout()
      this.router.navigate(['/auth/login']);
    }
}
