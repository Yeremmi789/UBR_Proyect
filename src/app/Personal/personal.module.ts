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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter/filter.pipe';


import { BreadcrumbModule } from 'xng-breadcrumb';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { RegistrarComponent } from './pages/paciente/registrar/registrar.component';
import { CrearComponent } from './pages/citas/crear/crear.component';


@NgModule({
  declarations: [
    MostrarComponent,
    PacienteComponent,
    ListadoComponent,
    BienvenidaComponent,
    FilterPipe,

    NavigationComponent,
    DashboardComponent,
    RegistrarComponent,
    CrearComponent,
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
    FormsModule,
    BreadcrumbModule,
    // Para usar los materiales de Angular, se necesita meter los Modulos en el archivo del modulo principal que está en cada carpeta y NO en el modulo principal del proyecto

    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,

    ReactiveFormsModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    RouterModule
  ],
})
export class PersonalModule { }
