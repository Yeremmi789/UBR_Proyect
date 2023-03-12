import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MostrarComponent } from './pages/citas/mostrar/mostrar.component';

@NgModule({
  declarations: [

  
    MostrarComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
