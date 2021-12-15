import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FactureModule } from './modules/facture/facture.module';
import { GestionProduitModule } from './modules/gestion-produit/gestion-produit.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { RayonModule } from './modules/GestionRayons/rayon.module';
import { StockModule } from './modules/GestionStocks/stock.module';
import { GestionClientModule } from './modules/gestion-client/gestion-client.module';
import { GestionUserModule } from './modules/gestion-user/gestion-user.module';
import { LoginComponent } from './login/login.component';
import { GestionFournisseurModule } from './modules/gestion-fournisseur/gestion-fournisseur.module';
import { HttpInterceptorService } from './Services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FactureModule,
    GestionProduitModule,
    NgbModule,
    RayonModule,
    StockModule,
    NotFoundModule,
    GestionClientModule,
    GestionUserModule,
    ReactiveFormsModule,
    FormsModule,
    GestionFournisseurModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : HttpInterceptorService ,multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
