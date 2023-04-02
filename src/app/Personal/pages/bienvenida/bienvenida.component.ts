import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// Creados por mí
import { RolesService } from '../../../auth/services/roles.service';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  // dataSource = ELEMENT_DATA;

  // Estas "Variables" son para poder mostrar los datos en pantallas :D
  Roles: any;
  Usuario: any;

  roles: any[] = [];

  Rol: any;

  constructor(private authService: AuthService,
    private router: Router,
    // private rolesService:RolesService,
    public rolesService: RolesService,
    private http: HttpClient,
  ) { }

  // Mi plan:
  // 1.- Obtener los roles en mi BD,
  // 2.- Obtner la informacion del rol que tiene el usuario en la BD; 
  // 2.1- ejemplo: obtener si el usuario actual tien el ID 1 || 2
  // 3.- Almacenar los dos Tipos de usuarios que existen en el sistema
  // 3.1.- Almacenar esos dos tipos en un arreglo 
  // 3.2.- Al tenerlos para consultar, para saber cual de los 2 roles tiene usuario actual
  // 4.- Manejar los componente visibles y no visibles con el ngIf y otras propiedades

  // 1.- Cuando funcione integrar ese arreglo de roles y tratar de aplicarlos en las rutas
  // 2.- Creo que ya se usaría el sericio de "ObtenerRoles"
  // 3.- Aplicar lo mismo que la autenticación, integrando solamente en el apartado de "Personal.Modules-routing"
  // 4.- Crear los guards y aplicar lo mismo...
  // 5.- Funcionar... espero y funcione.
  // PD: Apenas intentaré el paso 1... ojala me salga :,v


  // ngOnInit(): void {
  //   this.rolesService.ObtenerRoles()
  //   .subscribe( r=>{
  //     console.log(r);
  //     this.Roles=r;
  //     this.roles = [r];
  //   });
  //   this.rolesService.ObtenerMisDatos()
  //   .subscribe( contenido=>{
  //     console.log(contenido);
  //     this.Usuario=contenido;
  //   });
  // }

  // ngOnInit() {
  //   this.rolesService.ObtenerRoles()
  //   .subscribe( r=>{
  //     console.log(r);
  //     this.Roles=r;
  //     this.roles = [r];
  //     return [r];
  //   });
  //   this.rolesService.ObtenerMisDatos( )
  //   .subscribe( contenido=>{
  //     console.log(contenido);
  //     this.Usuario=contenido;
  //   });
  //   console.log(this.dataSource);
  // }

  private alertShown: boolean = false;

  ngOnInit() {
    this.rolesService.ObtenerRoles()
      .subscribe(r => {
        console.log(r);
        this.Roles = r;
        // this.roles = [r];
        // return [r];
      });
    this.rolesService.ObtenerMisDatos()
      .subscribe(contenido => {
        console.log(contenido);
        this.Usuario = contenido;
      });

    this.rolesService.ObtenerMisRoles()
      .subscribe(cont => {
        console.log(cont);
        this.Rol = cont;
      });
    // console.log(this.dataSource);
  }

  logout() {

    this.authService.logout()
    this.router.navigate(['/auth/login']);
  }
}
