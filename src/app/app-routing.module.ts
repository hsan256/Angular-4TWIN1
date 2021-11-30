import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { ListProduitComponent } from './GestionProduit/list-produit/list-produit.component';
import { TestComponent } from './test/test.component';
import { AddProduitComponent } from './GestionProduit/add-produit/add-produit.component';
import { ListRayonsComponent } from './GestionRayons/list-rayons/list-rayons.component';

const routes: Routes = [
  {path:"home", component:TestComponent},
  {path:"rayons", component:ListRayonsComponent},
  {path:"listclient", component:ListClientComponent},
  {path:"listproduit", component:ListProduitComponent},
  {path:"addproduit", component:AddProduitComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
