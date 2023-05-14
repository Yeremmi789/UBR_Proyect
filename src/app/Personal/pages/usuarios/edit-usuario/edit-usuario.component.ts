import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/Personal/services/usuarios/usuarios.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent {
  formRegistro: FormGroup = new FormGroup({});

  usuarioId: number = 0;
  usuario: any;

  constructor(private contr_form: FormBuilder,
    private router: Router,
    private servicio: UsuariosService,
    private route: ActivatedRoute
  ) { this.crearFormulario(); }

  datos: any;
  id: any;


  crearFormulario() {
    this.formRegistro = this.contr_form.group({
      roll: ['Cambiar rol', [Validators.required, this.validateRoll]],

    })
  }

  validateRoll(control: AbstractControl): { [key: string]: any } | null {
    if (control.value === 'Cambiar rol') {
      return { invalidOption: true };
    }
    return null;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuarioId = +params['id'];
      this.obtenerUsuario(this.usuarioId);
      console.log("HOLAaaaaaaaaaaaaaaaa")
      console.log(this.usuarioId)
    });
  }

  cargarDatosUsuario() {
    this.servicio.obtenerUsuarioPorId(this.id).subscribe(usuario => {
      console.log("HOLA XD")
      console.log(usuario)
      this.datos = usuario;
    });
  }

  nombre: string = "";
  correo: string = "";
  edad: number = 0;

  obtenerUsuario(id: number) {
    this.servicio.obtenerUsuarioPorId(id).subscribe(
      response => {
        this.datos = response;
        console.log(this.datos)
        this.nombre = response.name;
        // this.correo = response.correo;
        // this.edad = response.edad;
      },
      error => {
        console.error(error);
      }
    );
  }
}
