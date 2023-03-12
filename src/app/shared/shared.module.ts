import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PageErrorComponent } from './page-error/page-error.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CarouselComponent,
    PageErrorComponent
  ],

  exports:[
    NavComponent,
    CarouselComponent,
    FooterComponent,
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
