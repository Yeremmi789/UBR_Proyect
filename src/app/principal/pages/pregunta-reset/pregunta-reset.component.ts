import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from 'src/app/servicios/resetPassword/reset-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta-reset',
  templateUrl: './pregunta-reset.component.html',
  styleUrls: ['./pregunta-reset.component.css']
})
export class PreguntaResetComponent implements OnInit {

  // correo: string = "";
  pregunta_obt: any;

  preg_obt: any[] =[];


  correo: string ="";
  pregunta: string ="";
  respuesta: string ="";
  mensaje: string ="";

  
  constructor(private reset: ResetPasswordService,
    private router: Router
  ) { }


  ngOnInit(): void {
    // this.correo = this.reset.obtenerCorreo();
    const emaill = this.correo = this.reset.obtenerCorreo();

    // this.reset.obPregunta().subscribe( (dato) =>{

    // this.reset.obPregunta(emaill).subscribe(res => {
    //   // if (res === true) {

    //   //   this.preg_obt = res;
    //   //   console.log(this.preg_obt);
    //   //   console.log(emaill)
    //   // } else {
    //   //   console.log('NOOOOO')
    //   // }

    //   this.preg_obt = res;
    //   console.log(res);

    // });


    const resultao = this.reset.obtsnerDatos();
    console.log(resultao)
    

                              // this.reset.pedirCorreo(this.correo).subscribe(
                              //   (response: any) => {
                              //     this.pregunta = response.pregunta;
                              //     this.respuesta = response.respuesta;
                              //     this.mensaje = response.Msg;
                              //     console.log('holamundo');
                              //   },
                              //   (error: any) => {
                              //     this.mensaje = error.error.Msg;
                              //   }
                              // );
    

    // this.reset.obPregunta(emaill).subscribe((dato) => {
    //   this.preg_obt = dato;
    //   console.log(this.preg_obt);
    //   console.log(emaill)
    // });

    // this.reset.obtenerPregunta().subscribe((data: any[]) => {
    //   this.pregunta_obt = data;
    //   console.log(this.pregunta_obt);
    // });


  }
}
