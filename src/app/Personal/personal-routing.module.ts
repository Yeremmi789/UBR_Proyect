import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PacienteComponent } from './paciente/paciente.component';
import { PacienteComponent } from './paciente/paciente.component';

import { MostrarComponent } from './pages/citas/mostrar/mostrar.component';
// import { PacienteComponent } from './pages/paciente/paciente.component';
import { ListadoComponent } from './pages/paciente/listado/listado.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { PageErrorComponent } from '../shared/page-error/page-error.component';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Role } from '../_models/role';
import { RegistrarComponent } from './pages/paciente/registrar/registrar.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { CrearComponent } from './pages/citas/crear/crear.component';


const routes: Routes = [
  
  {path:'',
    children:[
      {path:'', component:BienvenidaComponent, pathMatch: 'full'},
      {path:'citas', 
      children:[
        {path:'**', redirectTo:'mostrar'},  
        {path:'mostrar', component:MostrarComponent},
        
      ]
    },
      {path:'Pacientes',
        children:[
          {path:'ver', component:PacienteComponent},
          { path: 'registrar', component: RegistrarComponent },
          { path: 'addCitas', component: CrearComponent },
          {path:'listado', component:ListadoComponent,
          canActivate: [RolesGuard], canLoad:[RolesGuard],
          data: {roles: [Role.Admin]}
        },
        ]
      },
      // {path:'Terapeutas',
      //   children:[
      //     // {path:'ver', component:PacienteComponent},
      //     { path: 'registrar', component: RegistroComponent },
      //   ]
      // },
      // {path:'**', redirectTo:'mostrar'}
    ]
  },

  // {path:'ver', component:PacienteComponent}
  {path:'',
  children:[

    // {path:'Bienvenida', component:BienvenidaComponent,pathMatch: 'full'},
    
    {path: '404', component:PageErrorComponent},
    {path: '**', redirectTo:'404'},
    // {path:'**', redirectTo:'login'}
  ]
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
