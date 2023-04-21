import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceCitasService } from 'src/app/Personal/services/service-citas.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  formCitas:FormGroup;
  //formUser:FormGroup;
  
  constructor (
    private fb: FormBuilder,
    private citas:ServiceCitasService,
  

    ){  
      this.formCitas=this.fb.group({
        id_paciente   : ['',Validators.required],
        fecha   : ['',Validators.required],
        teapeuta   : ['',Validators.required],
      })

    
    }
  // get nombre(){
  //   return this.formUser.get('nombre') as FormControl;
  // }
  // get correo(){
  //   return this.formUser.get('correo') as FormControl;
  // }
  // get telefono(){
  //   return this.formUser.get('telefono') as FormControl;
  // }
  // get direccion(){
  //   return this.formUser.get('direccion') as FormControl;
  // }
  
   //formUser = this.fb.group({
  //   'nombre'   : ['',Validators.required],
  //   'correo'   : ['',[Validators.required, Validators.email]],
  //   'telefono' : ['',Validators.required],
  //   'direccion': ['',Validators.required]
  // })

  // formUser = new FormGroup({
  //   'nombre' : new FormControl('',Validators.required),
  //   'correo'   :  new FormControl('',[Validators.required, Validators.email]),
  //   'telefono'  : new FormControl('',Validators.required),
  //   'direccion' :  new FormControl('',Validators.required)
  // });

  // nombre     =  new FormControl('',Validators.required);
  // correo     =  new FormControl('',[Validators.required, Validators.email]);
  // telefono   =  new FormControl('',Validators.required);
  // direccion  =  new FormControl('',Validators.required);;


  procesar():any{
    console.log(this.formCitas.value);
    // console.log('me presionaste');
    
    this.citas.registrarCita(this.formCitas.value).subscribe(
      ()=> {
        // this.message('Se regustro correctamente')
      }
    );
  }
}
