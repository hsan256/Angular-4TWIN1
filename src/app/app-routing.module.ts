import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRayonsComponent } from './all-rayons/all-rayons.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListProduitComponent } from './GestionProduit/list-produit/list-produit.component';
import { TestComponent } from './test/test.component';
import { AddProduitComponent } from './GestionProduit/add-produit/add-produit.component';
import { UpdateProduitComponent } from './GestionProduit/update-produit/update-produit.component';

const routes: Routes = [
  {path:"home", component:TestComponent},
  {path:"rayons", component:AllRayonsComponent},
  {path:"listclient", component:ListClientComponent},
  {path:"listproduit", component:ListProduitComponent},
  {path:"addproduit", component:AddProduitComponent},
  {path:"updateproduit", component:UpdateProduitComponent},

  {path:"", redirectTo:"home", pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
