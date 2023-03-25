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

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CarouselComponent,
    PageErrorComponent,
    BarraLateralComponent,
    TablesComponent
  ],

  exports:[
    NavComponent,
    CarouselComponent,
    FooterComponent,
    PageErrorComponent,
    BarraLateralComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatTableModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
