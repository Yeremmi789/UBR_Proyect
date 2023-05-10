import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Personal/services/usuarios/Usuarios';
import { UsuariosService } from 'src/app/Personal/services/usuarios/usuarios.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
// Tres formas de mostrar lo mismo jaja
  // usuarios: Usuario[] = [];
  // usuarios: any = [];
  usuarios: any;
  constructor(private router: Router,
    private servicio: UsuariosService,
    private authService:AuthService,) { }

  ngOnInit(): void {

    this.servicio.listUsuarios()
      .subscribe(resp => {
        console.log(resp);
        this.usuarios = resp;
      });
  }
}
