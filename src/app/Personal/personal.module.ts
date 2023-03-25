import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MostrarComponent } from './pages/citas/mostrar/mostrar.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { PacienteComponent } from './paciente/paciente.component';
import { ListadoComponent } from './pages/paciente/listado/listado.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    MostrarComponent,
    PacienteComponent,
    ListadoComponent,
    BienvenidaComponent,
    
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule,
    PersonalRoutingModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PersonalModule { }
