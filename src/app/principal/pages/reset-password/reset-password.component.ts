import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../../../servicios/resetPassword/reset-password.service';

import { FormsModule } from '@angular/forms';
import { retryWhen, delayWhen } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  formRegistro: FormGroup = new FormGroup({});

  formRespuesta: FormGroup = new FormGroup({});
  formNewContrasena: FormGroup = new FormGroup({});

  correo: string = "";

  // correos: string ="";
  pregunta: string = "";
  respuesta: string = "";
  mensajes: string = "";
  id: number = 0;
  datosCargados: boolean = false;
  datosListosBD: boolean = false;
  password: string = "";

  // Bloquear
  intentosFallidos = 0;

  constructor(private contr_form: FormBuilder, private mensaje: ToastrService, private reset: ResetPasswordService,
    private route: Router,) {
    this.crearFormulario();

    this.validarRespuesta();

    this.newContrasena();
  }


  crearFormulario() {
    this.formRegistro = this.contr_form.group({
      email: ['', [Validators.required, Validators.email, this.noGmail]]
      // email: ['', [Validators.required, Validators.email]]
    }
    );
  }

  validarRespuesta() {
    this.formRespuesta = this.contr_form.group({
      respuesta: ['', [Validators.required]],
    });
  }

  newContrasena() {
    this.formNewContrasena = this.contr_form.group({
      password: ['', [Validators.required]],
      // id: [this.numerador],

    });
  }

  imprimir(event: Event) {
    const correo = this.formRegistro.value.email;
    console.log(correo);
  }

  noGmail(control: FormControl) {
    if (control.value && control.value.match(/^[^\s@]{4,}@[^\s@]+\.[^\s@]{1,}$/)) {
      return null;
    }
    return { 'invalidEmail': true };
  }

  // verificarCorreo(): any {
  //   this.reset.Verfgmail(this.formRegistro.value).subscribe(
  //     (resp) => {
  //       console.log('Registro exitoso');
  //       console.log(resp);
  //       this.mensaje.success(":)", "Correo encontrado", {
  //         timeOut: 5000,
  //       });
  //       console.log('Toastr ejecutado');
  //     },
  //     error => {

  //       this.mensaje.error(":(", "Correo NO encontrado", {
  //         timeOut: 5000,
  //       });
  //       console.error(error);
  //     }
  //   );
  // }


  pedirGmail() {
    const { email } = this.formRegistro.value;
    this.reset.verificarGmaillll(email)
      .subscribe(resp => {
        if (resp === true) {
          // this.reset.guardarCorreo(this.correo);
          this.route.navigate(['/pregunta-reset']);
          this.mensaje.success(":)", "Correo encontrado", {
            timeOut: 5000,
          });
          console.log('SE PUDOOOOOO');
        } else {
          // this.route.navigate(['/']);
          this.mensaje.error(":(", "Correo NO encontrado", {
            timeOut: 5000,
          });
          console.log('NOOOOOOOOOSE PU');
        }
        return console.log(this.formRegistro.value);
      });
  }


  nuevo() {
    this.reset.pedirCorreo(this.correo).subscribe(
      (response: any) => {
        const p = this.pregunta = response.pregunta;
        const r = this.respuesta = response.respuesta;
        const m = this.mensajes = response.Msg;
        const i = this.mensajes = response.id;
        this.datosCargados = true;
        this.reset.guardarCorreo(this.correo);
        // console.log(response);
        // console.log(p);
        // console.log(r);
        // console.log(m);
        console.log(i);
        // this.reset.guardarCorreo(response);
        // this.route.navigate(['/pregunta-reset']);
        this.mensaje.success(":)", "Correo encontrado", {
          timeOut: 5000,
        });
      },
      (error: any) => {
        
        this.intentosFallidos++;
        // const mensajeError= error.error.Msg;
        
        this.mensaje.error(":(", "Correo NO encontrado", {
        // this.mensaje.error(":(", mensajeError, {
          timeOut: 5000,
        });

        // if(this.intentosFallidos ===5){
        //   this.bloquearFormularioTemporalmente();
        //   this.formRegistro.reset();

        // }

        // this.mensaje.warning("Intento: "+this.intentosFallidos, "Correo NO encontrado", {
        //   timeOut: 5000,
        // });
      }
    );
  }

  comprobarRespuesta() {
    // const reee = this.formRespuesta.value;
    const reee = this.formRespuesta.get('respuesta')?.value;
    if (this.respuesta === reee) {
      // estos es para imprimir y verificar los datos que enverdad se están recibiendo atravez del formulario
      // console.log('La respuesta coincide');
      // console.log(this.respuesta);
      // console.log(this.formRespuesta.value);

      // console.log(reee);
      this.peticionRespuestaBD(reee);

    } else {
      console.log('La respuesta NOOOOO coincide');
      // console.log(this.respuesta);
      // console.log(this.formRespuesta.value);
      console.log(reee);
    }
  }
  Mensage: string = "";
  okay: string = "";
  // numerador:number = 0;
  numerador: any;
  peticionRespuestaBD(respuesta: string) {
    // this.reset.vRespuesta(this.formRespuesta.get('respuesta')?.value)
    // const res_pregunta = {respuesta};
    this.reset.vRespuesta(respuesta).subscribe(
      (esponse: any) => {

        this.datosListosBD = true;
        const men = this.Mensage = esponse.Mensage;
        const oka = this.okay = esponse.okay;
        const numer = this.numerador = esponse.numerador;
      }
    );

  }
  men: string = "";
  mandarContrasena() {
    // const password = this.formNewContrasena.value;
    const password = this.formNewContrasena.get('password')?.value;
    const email = this.correo;
    console.log(password);
    this.reset.cambiarCont(password, email).subscribe(
      (resput: any) => {
        const r = this.men = resput.men;
        console.log(r);
        this.mensaje.success(":0", "Contraseña Cambiada", {
          timeOut: 5000,
          // positionClass: "toast-top-full-width",
        });

        this.route.navigate(['/auth/login'])
      },
      (error: any) => {
        this.mensaje.error(":(", "Ha ocurrido un problema con el servidor", {
          timeOut: 5000,
          positionClass: "toast-top-full-width",
        });
        this.mensaje = error.error.men;
        console.log('NOSAEPASE');
      }
    );
  }


  ngOnInit(): void {

  }

  bloquearFormularioTemporalmente() {
    // Deshabilitar el botón de envío del formulario
    this.formRegistro.disable();
    this.formRespuesta.disable();
    this.formNewContrasena.disable();

    // Establecer un temporizador para habilitar el botón después de 5 minutos
    setTimeout(() => {
      this.formRegistro.enable();
      this.formRespuesta.enable();
      this.formNewContrasena.enable();
      this.intentosFallidos = 0;
    }, 5 * 60 * 1000);
  }

}
