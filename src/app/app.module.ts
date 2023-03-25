import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonalModule } from './Personal/personal.module';

import {MatProgressBarModule} from '@angular/material/progress-bar';

// MDB BOOTSTRAP
// import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AuthService } from './auth/services/auth.service';

import { HttpClientModule } from '@angular/common/http';

// MDB BOOTSTRAP
import { PageErrorComponent } from './shared/page-error/page-error.component';

import { CookieService } from 'ngx-cookie-service';
import { TablesComponent } from './shared/tables/tables.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

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
    PersonalModule,
    MatProgressBarModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule
    
  ],
  providers:[
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
