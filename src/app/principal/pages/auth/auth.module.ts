import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IncioSessionComponent } from './incio-session/incio-session.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    IncioSessionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
