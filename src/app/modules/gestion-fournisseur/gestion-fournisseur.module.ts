import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFournisseurRoutingModule } from './gestion-fournisseur-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur/edit-fournisseur/edit-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { AddDetailFournisseurComponent } from './detailfournisseur/add-detail-fournisseur/add-detail-fournisseur.component';
import { EditDetailFournisseurComponent } from './detailfournisseur/edit-detail-fournisseur/edit-detail-fournisseur.component';
import { ListDetailFournisseurComponent } from './detailfournisseur/list-detail-fournisseur/list-detail-fournisseur.component';


@NgModule({
  declarations: [
    AddFournisseurComponent,
    EditFournisseurComponent,
    ListFournisseurComponent,
    AddDetailFournisseurComponent,
    EditDetailFournisseurComponent,
    ListDetailFournisseurComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    GestionFournisseurRoutingModule
  ]
})
export class GestionFournisseurModule { }
