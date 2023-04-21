import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';

import { InicioComponent } from './principal/pages/inicio/inicio.component';
import { QuienesSomosComponent } from './principal/pages/quienes-somos/quienes-somos.component';
import { InicioSessionComponent } from './principal/pages/inicio-session/inicio-session.component';
import { TerapeutasComponent } from './principal/pages/terapeutas/terapeutas.component';
import { RegistroTrabComponent } from './principal/pages/registro-trab/registro-trab.component';
import { AuthGuard } from './auth/guards/auth.guard';

import { PageErrorComponent } from './shared/page-error/page-error.component';


import { LoginComponent } from './auth/login/login.component';

import { PacienteComponent } from './Personal/paciente/paciente.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { RegistrarComponent } from './Personal/pages/paciente/registrar/registrar.component';
import { ResetPasswordComponent } from './principal/pages/reset-password/reset-password.component';
import { PreguntaResetComponent } from './principal/pages/pregunta-reset/pregunta-reset.component';





const routes: Routes = [

  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full',
  },
  {path: 'quienes-somos',component: QuienesSomosComponent,  data: { breadcrumb: 'Productos' } },

  {
    path: 'terapeutas',
    canLoad: [AuthGuard],
    component: TerapeutasComponent,
    data: {breadcrumb: 'Terapeutas'},
  },
  {
    path: 'inicio-session',
    component: InicioSessionComponent,
    data: { breadcrumb: 'Sesión' }
  },
  
  // { path: 'registrar-trabajador', component: RegistroTrabComponent },
  { path: 'registro', component: RegistroComponent },
  {path: 'resetPassword', component:ResetPasswordComponent},
  {path: 'pregunta-reset', component:PreguntaResetComponent},

  {
    path: 'auth', loadChildren: () => import("./auth/auth.module").then(module => module.AuthModule)
  },
  // {
  //   path: 'personal', loadChildren: () => import("./Personal/personal.module").then(modulo_XD => modulo_XD.PersonalModule)
  //   ,
  //   canActivate: [AuthGuard],
  //   canLoad: [AuthGuard], 
    
  // },
  {
    path: 'personal', loadChildren: () => import("./Personal/personal.module").then(modulo_XD => modulo_XD.PersonalModule)
    ,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard], 
    
  },

  {
    path: '404',
    component: PageErrorComponent
  },
  
  {
    path: '**',
    redirectTo: '404'
  }


];

@NgModule({

  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {

}
