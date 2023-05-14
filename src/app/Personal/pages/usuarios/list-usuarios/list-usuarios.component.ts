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

  usuarioSeleccionado: any; // Variable para almacenar el usuario seleccionado

  editarUsuarioPorId(id: number) {
    this.servicio.obtenerUsuarioPorId(id).subscribe(usuario => {
      // Aquí puedes realizar cualquier acción adicional con el usuario obtenido, como abrir un formulario de edición con los datos del usuario seleccionado
      // this.usuarios = usuario;
      this.router.navigate(['/Usuarios/editar', id]);
    });
  }

  editarUsuario(usuarioId: number) {
    // this.router.navigate(['/Usuarios/editar', usuarioId]);
    this.router.navigate(['/personal/Usuarios/editar', usuarioId]);
  }

}
