import { Component, OnInit, NgModule } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeaheadMatch, TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { ServiceCitasService } from 'src/app/Personal/services/service-citas.service';
import { RegistroService } from 'src/app/auth/services/registro/registro.service';
import { CitasService } from '../../../services/citas/citas.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent implements OnInit {
  formCitas: FormGroup;
  formRegistro: FormGroup = new FormGroup({});

  asunto: string = "";
  descripcion: string = "";
  TiposList: any;
  verSeleccion: string = "";

  consulta: string = "";
  resultadosPacientes: any = [];

  resultados: any = [];
  pacienteSeleccionado: any;


  // para validar de que se encuentra el paciente en la BD
  pacienteValido: boolean = false;

  // Desabilitar un input
  desactivado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private citas: ServiceCitasService,
    private contr_form: FormBuilder,
    private registroService: RegistroService, //para obtener los terapeutas en el sistema
    private citasService: CitasService, //para obtener los terapeutas en el sistema
    private router: Router,
    private mensaje: ToastrService,

  ) {
    this.formCitas = this.fb.group({
      id_paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      teapeuta: ['', Validators.required],
    })

    this.crearFormulario();

    this.consulta = '';
  }
  ngOnInit(): void {
    this.citasService.obtenerTerapeutas().subscribe((data: any[]) => {
      this.TiposList = data;
      console.log(this.TiposList);
    });
  }

  crearFormulario() {
    this.formRegistro = this.contr_form.group({
      asunto: ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3), Validators.maxLength(30)]],
      descripcion: ['', [Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3), Validators.maxLength(30)]],
      // paciente: ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3), Validators.maxLength(30)]],
      paciente: ['', Validators.required,],
      // apellidoPaterno: ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/)]],
      apellidoPaterno: ['', Validators.required,],
      // apellidoMaterno: ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/)]],
      apellidoMaterno: ['', Validators.required,],
      terapia_id: ['Seleccione terapeuta', [Validators.required, this.validateSelectOption]],
      fecha: ['', [Validators.required, this.fechaValida]],
      hora: ['', [Validators.required, this.horaValida]]
    });
  }

  validateSelectOption(control: AbstractControl): { [key: string]: any } | null {
    if (control.value === 'Seleccione terapeuta') {
      return { invalidOption: true };
    }
    return null;
  }

  fechaValida(control: FormControl): { [s: string]: boolean } | null {
    const fechaIngresada = new Date(control.value);
    const fechaActual = new Date();

    if (fechaIngresada < fechaActual) {
      return { 'fechaInvalida': true }
    }
    return null;
  }

  horaValida(control: FormControl): { [s: string]: boolean } | null {
    const horaIngresada = new Date().setHours(control.value.split(':'));
    const horaActual = new Date();

    if (horaIngresada < horaActual.getTime()) {
      return { 'horaInvalida': true }
    }
    return null;
  }

  procesar(): any {
    console.log(this.formCitas.value);
    this.citas.registrarCita(this.formCitas.value).subscribe(
      () => {
        // this.message('Se regustro correctamente')
      }
    );
  }


  buscarPacientes() {

    this.citasService.buscarPacientes(this.consulta).subscribe(
      response => {
        console.log(this.resultadosPacientes);
        this.resultadosPacientes = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  seleccionarPaciente(paciente: any) {
    this.pacienteSeleccionado = paciente;
    // this.formRegistro.get('paciente')?.setValue(paciente.nombre + " " + paciente.apellidoP + " " + paciente.apellidoM);
    this.formRegistro.get('paciente')?.setValue(paciente.nombre);
    this.formRegistro.get('apellidoPaterno')?.setValue(paciente.apellidoP);
    this.formRegistro.get('apellidoMaterno')?.setValue(paciente.apellidoM);

    // Despues de seleccionado desaparezcan las busquedas :D
    this.resultadosPacientes = [];

    // realiza la validación para verificar si el paciente seleccionado se encuentra en la lista de resultados:
    this.pacienteValido = this.resultadosPacientes.includes(paciente);
  }





  registrarCita(): any {
    this.citasService.anadirCita(this.formRegistro.value).subscribe(() => {
      console.log('Registro Exitoso')
      
      this.router.navigateByUrl('/personal/Pacientes/registrar')
      .then(() => {
        location.reload();
        this.mensajes();
      });

    });


  }

  mensajes() {
    return this.mensaje.success(":)", "Cita registrada", {
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      // positionClass: 'bottom-full',
    });

  }


}
