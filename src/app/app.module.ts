import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { CatalogueServicesService } from './catalogue-services.service';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from './services/authentification.service';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    LoginComponent,
    DetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  HttpClientModule,FormsModule
   
   ],
  providers: [CatalogueServicesService,AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
