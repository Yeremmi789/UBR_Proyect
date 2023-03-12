import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarComponent } from './pages/citas/mostrar/mostrar.component';

const routes: Routes = [
  {path:'',
    children:[
      {path:'mostrar', component:MostrarComponent},

      {path:'**', redirectTo:'mostrar'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
