import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    }

    checkLocalStorage(){
      if(localStorage.getItem('token')){
        this.router.navigateByUrl('/personal/');
      }
    }

  login(){
    const {name,password} = this.formLogin.value;
      this.authServices.login(name, password)
        .subscribe(resp => {
          // console.log(resp);
          if( resp === true ){
            this.router.navigate(['/personal'])
            .then(() => {
              location.reload();
            });
          }else{
            Swal.fire('Algo salio mal','Verifique sus datos, porfavor', 'error');
          }
          return console.log(this.formLogin.value);
        })
      ;
  }

  entrar(){
    this.authServices.logout();
    this.router.navigate(['/personal/mostrar']);
  }
}
