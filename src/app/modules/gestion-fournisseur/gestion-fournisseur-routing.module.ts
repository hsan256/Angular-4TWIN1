import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { AddDetailFournisseurComponent } from './detailfournisseur/add-detail-fournisseur/add-detail-fournisseur.component';
import { EditDetailFournisseurComponent } from './detailfournisseur/edit-detail-fournisseur/edit-detail-fournisseur.component';
import { ListDetailFournisseurComponent } from './detailfournisseur/list-detail-fournisseur/list-detail-fournisseur.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur/edit-fournisseur/edit-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';

const routes: Routes = [
  {path:"view-Fournisseur", component:ListFournisseurComponent,canActivate:[RouteGuardService] },
  { path: "view-Fournisseur", component: ListFournisseurComponent ,canActivate:[RouteGuardService] },  
  { path: "add-Fournisseur", component: AddFournisseurComponent,canActivate:[RouteGuardService] }, 
  { path: "edit-Fournisseur/:id", component: EditFournisseurComponent,canActivate:[RouteGuardService] },
  { path: "view-Detail-Fournisseur", component: ListDetailFournisseurComponent ,canActivate:[RouteGuardService]},  
  { path: "add-Detail-Fournisseur", component: AddDetailFournisseurComponent ,canActivate:[RouteGuardService]}, 
  { path: "edit-Detail-Fournisseur", component: EditDetailFournisseurComponent ,canActivate:[RouteGuardService]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFournisseurRoutingModule { }
