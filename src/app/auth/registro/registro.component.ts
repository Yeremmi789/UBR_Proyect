import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../services/registro/registro.service';
import { ToastContainerDirective, ToastrService, ToastrConfig } from 'ngx-toastr';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  // Para poder usar el formulario en una funcion afuera del constructor
  formRegistro:FormGroup = new FormGroup({});
  
  opcionSeleccionado: string  = '0';
  
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective | undefined;

  @ViewChildren(ToastContainerDirective) inlineContainers!: QueryList<ToastContainerDirective>;
  
  // Verificar campos
  nombre:string ="";
  edad:string="";
  ap_p:string ="";
  ap_m:string ="";
  mail:string ="";
  pass:string ="";
  conf_pass:string ="";
  
  verSeleccion: string = "";
  verPregunta: string = "";
  respuesta:string ="";

  termsAccepted = false;
  
  formComplete  = false;

  TiposList: any;
  List: any;



  constructor(private AuthService:AuthService,
    private contr_form:FormBuilder,
    private router: Router,
    private registroService:RegistroService,

    private mensaje:ToastrService,

    ){
      this.crearFormulario();
    }

    crearFormulario(){
      this.formRegistro = this.contr_form.group({
        name: ['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3), Validators.maxLength(30)]],
        apellido_paterno:['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3),Validators.maxLength(30)]],
        // apellido_materno:['', [Validators.required, Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3),Validators.maxLength(30)]],
        email:['', [Validators.required, Validators.email,this.noGmail, Validators.pattern(/^[a-zA-Z0-9._%+-áéíóúÁÉÍÓÚ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
        password:['', [Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/), Validators.minLength(6)]],
        password_confirmation: ['', [Validators.required, this.confirmarPassword() ]],
        edad:['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(5), Validators.max(70)]],
        // terapia_id: ['Seleccione especialidad', [Validators.required, this.validateSelectOption]],
        // pregunta:['Seleccione pregunta', [Validators.required, this.validatePregunta]],
        // respuesta:['', [Validators.required,Validators.pattern(/^((?!\s+$)[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s])*$/), Validators.minLength(3), Validators.maxLength(30)]],
        // termsAccepted:[false, [Validators.required]],
    });
    }

    noGmail(control: FormControl) {
      if (control.value && control.value.match(/^[^\s@]{4,}@[^\s@]+\.[^\s@]{1,}$/)) {
        return null;
      }
      return { 'invalidEmail': true };
    }

    // noGmail(control: FormControl) {
    //   if (control.value && control.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    //     return null;
    //   }
    //   return { 'invalidEmail': true };
    // }

    validateSelectOption(control: AbstractControl): { [key: string]: any } | null {
      if (control.value === 'Seleccione especialidad') {
        return { invalidOption: true };
      }
      return null;
    }

    validatePregunta(control: AbstractControl): { [key: string]: any } | null {
      if (control.value === 'Seleccione pregunta') {
        return { invalidOption: true };
      }
      return null;
    }

    get terapiaTipo(){
      return this.formRegistro.get('terapia_id');
    }

    get pregunta(){
      return this.formRegistro.get('pregunta_id');
    }

    confirmarPassword(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        const password = control.root.get('password');
        return password && control.value !== password.value ? { 'passwordMismatch': true } : null;
      };
    }
  

    registro():any{
      // const {
      //   name,
      //   apellido_paterno,
      //   apellido_materno,
      //   email,
      //   password,
      //   edad,
      //   terapia_id,
      //   pregunta,
      //   respuesta,
      // } = this.formRegistro.value;
      // this.registroService.registro(
      //   name,
      //   apellido_paterno,
      //   apellido_materno,
      //   email,
      //   password,
      //   edad,
      //   terapia_id,
      //   pregunta,
      //   respuesta,
      // ).subscribe(res=>{
      //   if(res === true){
      //     this.router.navigate(['/auth/login']);
      //     this.mensaje.info(":)","Usuario registrado",{
      //       timeOut:5000,
      //       // positionClass: 'toast-top-right',
      //     });
      //   }
      // });
      this.registroService.registro(this.formRegistro.value).subscribe(
        (respuesta) => {
          console.log('Registro exitoso');
          this.router.navigateByUrl('/');
          this.completo();
          console.log('Toastr ejecutado');
          // this.mensajes();
        },
        error => {
        // this.router.navigateByUrl('personal/Pacientes/listado');
        this.noCompleto();
          console.error(error);
        }
      );
    }
  

    completo(){
      this.mensaje.success("¡Gracias por unirte a nosotros! ","Usuario registrado",{
        timeOut:5000,
        positionClass: 'toast-bottom-right',
        // positionClass: 'toast-bottom-full-width',
      });
    }

    noCompleto(){
      this.mensaje.error("No registrado,","Lo sentimos, el correo ya existe",{
        timeOut:5000,
        positionClass: 'toast-bottom-right',
        // positionClass: 'toast-bottom-full-width',
      });

      
      
    }


    mensajes(){
      this.mensaje.success(':DDD','Usuario registrado exitosamente',{
        timeOut:5000,
        positionClass: 'toast-container',
      });

      this.mensaje.toastrConfig.positionClass ='toast-bottom-full-width';
      
      
    }




  ngOnInit(): void {
    this.registroService.obtenerTerapias().subscribe((data:any[])=>{
      this.TiposList=data;
      console.log(this.TiposList);
    });

    this.mensaje.overlayContainer = this.toastContainer;
    

    this.registroService.preguntass().subscribe((data:any[])=>{
      this.List=data;
      console.log(this.List);
    });
    
  }
}
