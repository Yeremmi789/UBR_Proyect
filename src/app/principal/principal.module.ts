import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { InicioSessionComponent } from './pages/inicio-session/inicio-session.component';
import { TerapeutasComponent } from './pages/terapeutas/terapeutas.component';

import { HammerModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import { RegistroTrabComponent } from './pages/registro-trab/registro-trab.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreguntaResetComponent } from './pages/pregunta-reset/pregunta-reset.component';
import { ImageFilterPipe } from './pipes/image-filter.pipe';

@NgModule({
  declarations: [
    InicioComponent,
    QuienesSomosComponent,
    InicioSessionComponent,
    TerapeutasComponent,
    RegistroTrabComponent,
    ResetPasswordComponent,
    PreguntaResetComponent,
    ImageFilterPipe,

  ],

  exports:[
    InicioComponent,
    QuienesSomosComponent,
    InicioSessionComponent,
    TerapeutasComponent,
    RegistroTrabComponent
  ],

  imports: [
    CommonModule,
    HammerModule,
    SharedModule,
    // para que el carrusel funcione
    MdbCarouselModule,
    // para que el carrusel funcione

    MatTooltipModule, //Para mostrar una leyenda al momento de pasar encima el cursor
    
    FormsModule,
    ReactiveFormsModule,
  ],
  
  // para que el carrusel funcione
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  // para que el carrusel funcione
})
export class PrincipalModule { }
