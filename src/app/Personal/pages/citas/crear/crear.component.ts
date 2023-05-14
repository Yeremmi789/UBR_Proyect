import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceCitasService } from 'src/app/Personal/services/service-citas.service';
import { RegistroService } from 'src/app/auth/services/registro/registro.service';
import { CitasService } from '../../../services/citas/citas.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  formCitas: FormGroup;
  formRegistro: FormGroup = new FormGroup({});

  //formUser:FormGroup;
  asunto: string = "";
  descripcion: string = "";
  TiposList: any;
  verSeleccion: string = "";

  consulta: string = "";
  resultadosPacientes: any = [];

  constructor(
    private fb: FormBuilder,
    private citas: ServiceCitasService,
    private contr_form: FormBuilder,
    private registroService: RegistroService, //para obtener los terapeutas en el sistema
    private citasService: CitasService, //para obtener los terapeutas en el sistema


  ) {
    this.formCitas = this.fb.group({
      id_paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      teapeuta: ['', Validators.required],
    })

    this.crearFormulario();

    this.consulta = '';
    this.resultadosPacientes = [];

  }
  ngOnInit(): void {
    // this.registroService.obtenerTerapias().subscribe((data:any[])=>{
    //   this.TiposList=data;
    //   console.log(this.TiposList);
    // });

    this.citasService.obtenerTerapeutas().subscribe((data: any[]) => {
      this.TiposList = data;
      console.log(this.TiposList);
    });
  }

  crearFormulario() {
    this.formRegistro = this.contr_form.group({
      asunto: ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3), Validators.maxLength(30)]],
      descripcion: ['', [Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3), Validators.maxLength(30)]],
      paciente: ['', [Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3), Validators.maxLength(30)]],
      terapia_id: ['Seleccione terapeuta', [Validators.required, this.validateSelectOption]],
      fecha: ['', [Validators.required, this.validateDate]],
    });
  }

  validateSelectOption(control: AbstractControl): { [key: string]: any } | null {
    if (control.value === 'Seleccione terapeuta') {
      return { invalidOption: true };
    }
    return null;
  }

  validateDate(control: FormControl) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      return { pasDate: true };
    }
    return null;
  }

  procesar(): any {
    console.log(this.formCitas.value);
    // console.log('me presionaste');

    this.citas.registrarCita(this.formCitas.value).subscribe(
      () => {
        // this.message('Se regustro correctamente')
      }
    );
  }

  buscarPacientes() {
    this.citasService.buscarPacientes(this.consulta).subscribe(
      response => {
        this.resultadosPacientes = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  seleccionarPaciente(resultado: any) {
    // Realiza las acciones correspondientes al seleccionar un paciente, como llenar los campos relacionados
  
    // Limpiar la lista de resultados de búsqueda
    this.resultadosPacientes = [];
  }


}
