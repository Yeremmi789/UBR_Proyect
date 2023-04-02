import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../../../services/pacientes.service';
import { AuthService } from '../../../../auth/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { FilterPipe } from 'src/app/Personal/filter/filter.pipe';
import { RolesService } from '../../../../auth/services/roles.service';

export interface PeriodicElement {
}
const ELEMENT_DATA: PeriodicElement[] = [
];



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  Rol: any;

  filterPost:string='';

  // filterPost = '';
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  Paciente:any;

  constructor(private router:Router, 
    private authService:AuthService,
    private servicio:PacientesService,
    private rolesService:RolesService) {}

    ngOnInit(): void {

      this.servicio.MostrarUsuariosUwU()
      .subscribe(resp=>{
        console.log(resp);
        this.Paciente=resp;
      });

      

      this.rolesService.ObtenerMisRoles()
      .subscribe(cont => {
        console.log(cont);
        this.Rol = cont;
      });
    }

    logout(){
    
      this.authService.logout()
      this.router.navigate(['/auth/login']);
    }
}
