import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionProduitRoutingModule } from './gestion-produit-routing.module';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';
import { UpdateDetailProduitComponent } from './components/update-detail-produit/update-detail-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AddProduitComponent,
    ListProduitComponent,
    UpdateProduitComponent,
    UpdateDetailProduitComponent
  ],
  imports: [
    CommonModule,
    GestionProduitRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
  ]
})
export class GestionProduitModule { }
