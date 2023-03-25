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

const routes: Routes = [

  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
  },

  {
    path: 'terapeutas',
    canLoad: [AuthGuard],
    component: TerapeutasComponent
  },
  {
    path: 'inicio-session',
    component: InicioSessionComponent
  },
  { path: 'registrar-trabajador', component: RegistroTrabComponent },

  {
    path: 'auth', loadChildren: () => import("./auth/auth.module").then(module => module.AuthModule)
  },
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
