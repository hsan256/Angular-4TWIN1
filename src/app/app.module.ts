import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { AllRayonsComponent } from './all-rayons/all-rayons.component';

import { ListClientComponent } from './list-client/list-client.component';
import { ListProduitComponent } from './GestionProduit/list-produit/list-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProduitComponent } from './GestionProduit/add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    AllRayonsComponent,
    ListClientComponent,
    ListProduitComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
