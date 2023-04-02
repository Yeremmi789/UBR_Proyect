// Sección de Modulos ---- // Sección de Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { PrincipalModule } from './principal/principal.module';
import { PersonalModule } from './Personal/personal.module';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'angular-crumbs';
// Sección de Modulos ---- // Sección de Modulos

// Componentes ---- // Componentes
import { AppComponent } from './app.component';
// Componentes ---- // Componentes

// Navegador ---- // Navegador
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/services/auth.service';
// Navegador ---- // Navegador

//Angular Material --- //Angular Material
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Material --- //Angular Material


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
    HttpClientModule,
    MatSlideToggleModule,
    PersonalModule,
    MatProgressBarModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    BreadcrumbModule
  ],
  providers:[
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
