import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { ListProduitComponent } from './GestionProduit/list-produit/list-produit.component';
import { TestComponent } from './test/test.component';
import { AddProduitComponent } from './GestionProduit/add-produit/add-produit.component';
import { UpdateProduitComponent } from './GestionProduit/update-produit/update-produit.component';

const routes: Routes = [
  { path: "home", component: TestComponent },
  { path: "listclient", component: ListClientComponent },
  { path: "listproduit", component: ListProduitComponent },
  { path: "addproduit", component: AddProduitComponent },
  { path: "updateproduit/:id", component:UpdateProduitComponent },
  { path: "rayons", loadChildren: () => import('./GestionRayons/rayon.module').then(m => m.RayonModule) },
  { path: "stocks", loadChildren: () => import('./GestionStocks/stock.module').then(m => m.StockModule) },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
