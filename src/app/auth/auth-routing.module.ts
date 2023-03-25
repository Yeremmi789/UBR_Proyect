import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorComponent } from '../shared/page-error/page-error.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [

  {path:'',
    children:[
      {path:'login', component:LoginComponent, pathMatch:'full'},
      // {path:'login', component:LoginComponent, pathMatch:'full'},
      {path: '**', redirectTo:'login'},
    ]
  },
  // {path:'',
  //   children:[
  //     // {path:'sing-up',component:RegistroComponent},
  //     {path: '404', component:PageErrorComponent},
  //     {path: '**', redirectTo:'404'},
  //     // {path:'**', redirectTo:'login'}
  //   ]
  // }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

