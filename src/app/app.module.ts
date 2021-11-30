import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';

import { ListClientComponent } from './list-client/list-client.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProduitComponent } from './GestionProduit/list-produit/list-produit.component';
import { AddProduitComponent } from './GestionProduit/add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { ListRayonsComponent } from './GestionRayons/list-rayons/list-rayons.component';
import { AddRayonComponent } from './GestionRayons/add-rayon/add-rayon.component';
import { UpdateProduitComponent } from './GestionProduit/update-produit/update-produit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    ListClientComponent,
    ListProduitComponent,
    AddProduitComponent,
    ListRayonsComponent,
    AddRayonComponent,
    UpdateProduitComponent
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
