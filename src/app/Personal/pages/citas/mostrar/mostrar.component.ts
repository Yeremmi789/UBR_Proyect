import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PacientesService } from '../../../services/pacientes.service';
import { Paciente } from '../../../services/Pacientes';
// import { AuthService } from '../../auth/services/auth.service';
import { AuthService } from '../../../../auth/services/auth.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent /*implements AfterViewInit*/ implements OnInit{
  Paciente:any;
  
  constructor(private router:Router, 
    private authService:AuthService,
    private servicio:PacientesService) {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit(): void {
    // Para mostrar la informacion en la consola
    // this.servicio.MostrarUsuariosUwU().subscribe(respu =>{
    //   console.log(respu);

    //   // Mostrar la información.. solo falta añadir las variables en la tabla
    //   this.Paciente=respu;
    // });
    this.servicio.MostrarUsuariosUwU()
    .subscribe(resp=>{
      console.log(resp);
      this.Paciente=resp;
    });
    // this.servicio.MostrarUsuariosUwU().subscribe(
    //   data=>{
    //     this.users=data;
    //   }
    // );
  }

  ver(){
    
  }

  logout(){
    
    this.authService.logout()
    this.router.navigate(['/auth/login']);
  }

}
