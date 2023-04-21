// Sección de Modulos ---- // Sección de Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { PrincipalModule } from './principal/principal.module';
import { PersonalModule } from './Personal/personal.module';
import { HttpClientModule } from '@angular/common/http';

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
import { ToastrModule } from 'ngx-toastr';
//Angular Material --- //Angular Material


import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbService } from 'xng-breadcrumb';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    // NavigationComponent,
    // DashboardComponent,
    
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
    BreadcrumbModule,
    ToastrModule.forRoot(),



    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule, // ToastrModule added


    MatTooltipModule, //Para mostrar una leyenda al momento de pasar encima el cursor
  ],
  providers:[
    AuthService,
    CookieService,
    BreadcrumbService
  ],

  exports:[
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
