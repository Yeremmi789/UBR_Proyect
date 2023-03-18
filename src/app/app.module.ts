import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonalModule } from './Personal/personal.module';

// MDB BOOTSTRAP
// import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AuthService } from './auth/services/auth.service';

import { HttpClientModule } from '@angular/common/http';

// MDB BOOTSTRAP
import { PageErrorComponent } from './shared/page-error/page-error.component';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PrincipalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    // importante para poder usar nuestros servicios generados 
    HttpClientModule,
    // importante para poder usar nuestros servicios generados 
    // MdbCarouselModule,
    MatSlideToggleModule,
    PersonalModule
  ],
  providers:[
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
