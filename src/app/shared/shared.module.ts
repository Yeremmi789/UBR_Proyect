import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PageErrorComponent } from './page-error/page-error.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { HttpClientModule } from '@angular/common/http';
import { TablesComponent } from './tables/tables.component';
import { MatTableModule } from '@angular/material/table';
// import { FilterPipe } from './filter/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NavLoggedComponent } from './nav-logged/nav-logged.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { MatTooltipModule } from '@angular/material/tooltip';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CarouselComponent,
    PageErrorComponent,
    BarraLateralComponent,
    TablesComponent,
    NavLoggedComponent,
    BreadcrumbsComponent,
    // ResetPasswordComponent,
    
    // FilterPipe,
    
  ],

  exports:[
    NavComponent,
    CarouselComponent,
    FooterComponent,
    PageErrorComponent,
    BarraLateralComponent,
    TablesComponent,
    NavLoggedComponent,
    BreadcrumbsComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,


    MatIconModule,
    MatButtonModule,

    MatTooltipModule, //Para mostrar una leyenda al momento de pasar encima el cursor
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
