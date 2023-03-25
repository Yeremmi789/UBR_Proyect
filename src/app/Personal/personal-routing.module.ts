import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { MostrarComponent } from './pages/citas/mostrar/mostrar.component';
// import { PacienteComponent } from './pages/paciente/paciente.component';
import { ListadoComponent } from './pages/paciente/listado/listado.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { PageErrorComponent } from '../shared/page-error/page-error.component';


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
          {path:'listado', component:ListadoComponent},
        ]
      },
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
