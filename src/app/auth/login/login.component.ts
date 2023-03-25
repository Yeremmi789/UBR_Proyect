import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { AuthService } from '../services/auth.service';

import Swal from 'sweetalert2';

import {AuthService} from 'src/app/auth/services/auth.service'
import { Token } from '../services/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin:FormGroup;

  constructor(
    private router: Router,
    private authServices:AuthService,
    private contr_form:FormBuilder,
    
    ) {

      this.formLogin = this.contr_form.group({
        name: [''],
        password:['']
    });


    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      // this.checkLocalStorage();
    }

    checkLocalStorage(){
      if(localStorage.getItem('token')){
        // this.router.navigateByUrl('/personal/mostrar');
        this.router.navigateByUrl('/personal/');
      }
    }

  login(){
    // Ir al backend
    // Un usuario
    // this.router.navigate(['./terapeutas']);
    // this.router.navigate(['/terapeutas']);

    // this.authServices.login('dsadasd', '2133123').subscribe(resp =>{
    //   console.log(resp);

    //   if(resp.id){
        
    //     // this.router.navigate(['./terapeutas']);
    //     this.router.navigate(['/personal/mostrar']);
    //   }
    // });

    const {name,password} = this.formLogin.value;
      
      this.authServices.login(name, password)
        .subscribe(resp => {
          // console.log(resp);
          if( resp === true ){
            // Swal.fire({
            //   position: 'center',
            //   icon: 'success',
            //   title: 'Bienvenido',
            //   showConfirmButton: false,
            //   timer: 3500
            // }),

            // this.router.navigateByUrl('/personal/mostrar');
            this.router.navigateByUrl('/personal');
            // this.router.navigateByUrl('/auth/sing-up')
          }else{
            // this.router.navigateByUrl('/auth/login')
            // console.log("Redireccionado a la misma pagina xd");
            Swal.fire('Algo salio mal','Verifique sus datos, porfavor', 'error');
          }

          return console.log(this.formLogin.value);
        })
      ;
  }


  // logout(){
  //   this.authServices.logout();
  // }

  entrar(){
    this.authServices.logout();
    this.router.navigate(['/personal/mostrar']);
  }

}
