import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { AllRayonsComponent } from './all-rayons/all-rayons.component';

import { ListClientComponent } from './list-client/list-client.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProduitComponent } from './GestionProduit/list-produit/list-produit.component';
import { AddProduitComponent } from './GestionProduit/add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './GestionProduit/update-produit/update-produit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateDetailProduitComponent } from './GestionProduit/update-detail-produit/update-detail-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    AllRayonsComponent,
    ListClientComponent,
    ListProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    UpdateDetailProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
