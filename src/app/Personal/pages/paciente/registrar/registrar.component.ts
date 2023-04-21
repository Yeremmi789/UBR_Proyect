import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroService } from '../../../../auth/services/registro/registro.service';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/auth/services/pacientes/pacientes.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
  
})
export class RegistrarComponent {

  formRegistro:FormGroup = new FormGroup({});

  constructor(private registrarService:PacientesService,
    private contr_form:FormBuilder,
    private mensaje:ToastrService
    ){this.crearFormulario();}

    crearFormulario(){
      this.formRegistro = this.contr_form.group({
        nombre: ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3),Validators.maxLength(30)]],
        edad   : ['', [Validators.required, Validators.required, Validators.pattern(/^\d+$/), Validators.min(5), Validators.max(70)]],
        apellidoP   : ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3),Validators.maxLength(30)]],
        apellidoM   : ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3),Validators.maxLength(30)]],
        expediente   : ['', [Validators.required, Validators.pattern(/^\d{1,4}\/\d{1,4}$/)]],
        tipoABC   : ['Seleccione',[Validators.required, this.validateSelectOption]],
        sexo : ['Mencione género',[Validators.required, this.validateGenero]],
        direccion: ['', [Validators.required, Validators.minLength(6)]],
        patologia   : ['',Validators.required]
      });
  }


  validateSelectOption(control: AbstractControl): { [key: string]: any } | null {
    if (control.value === 'Seleccione') {
      return { invalidOption: true };
    }
    return null;
  }

  validateGenero(control: AbstractControl): { [key: string]: any } | null {
    if (control.value === 'Mencione género') {
      return { invalidOption: true };
    }
    return null;
  }

  procesar():any{
    console.log(this.formRegistro.value);
    // console.log('me presionaste');
    
    this.registrarService.registroPacientes(this.formRegistro.value).subscribe(
      () => {
        console.log('Registro exitoso');
        // this.mensaje.success(":)","Usuario registrado",{
        //   timeOut:5000,
        // });
        this.completo();
        console.log('Toastr ejecutado');
      },
      (error: any)=>{
        this.mensaje.error(":(", "Paciente NO encontrado", {
          timeOut: 5000,
        });
        this.mensaje = error.error.Msg;
      }
    );
  }

  completo(){
    return this.mensaje.success(":)","Paciente registrado",{
      timeOut:5000,
      positionClass: 'toast-bottom-right',
      // positionClass: 'bottom-full',
    });
  }

}
