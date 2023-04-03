import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MostrarComponent } from './pages/citas/mostrar/mostrar.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { PacienteComponent } from './paciente/paciente.component';
import { ListadoComponent } from './pages/paciente/listado/listado.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    MostrarComponent,
    PacienteComponent,
    ListadoComponent,
    BienvenidaComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule,
    PersonalRoutingModule,
    // Para usar los materiales de Angular, se necesita meter los Modulos en el archivo del modulo principal que está en cada carpeta y NO en el modulo principal del proyecto
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
    // Para usar los materiales de Angular, se necesita meter los Modulos en el archivo del modulo principal que está en cada carpeta y NO en el modulo principal del proyecto
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PersonalModule { }
