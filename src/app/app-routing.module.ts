import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './Services/route-guard.service';

const routes: Routes = [
  
  {
    path: 'facture',
    loadChildren: () => import('./modules/facture/facture.module')
      .then(mod => mod.FactureModule), canActivate:[RouteGuardService] 
  },
  {
    path: 'client',
    loadChildren: () => import('./modules/gestion-client/gestion-client.module')
      .then(mod => mod.GestionClientModule), canActivate:[RouteGuardService] 
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/gestion-user/gestion-user.module')
      .then(mod => mod.GestionUserModule), canActivate:[RouteGuardService] 
  },
  {
    path: 'produit',
    loadChildren: () => import('./modules/gestion-produit/gestion-produit.module')
      .then(mod => mod.GestionProduitModule), canActivate:[RouteGuardService] 
  },
  { path: "fournisseur", loadChildren: () => import('./modules/gestion-fournisseur/gestion-fournisseur.module').then(m => m.GestionFournisseurModule) , canActivate:[RouteGuardService] },
  { path: "rayons", loadChildren: () => import('./modules/GestionRayons/rayon.module').then(m => m.RayonModule) , canActivate:[RouteGuardService] },
  { path: "stocks", loadChildren: () => import('./modules/GestionStocks/stock.module').then(m => m.StockModule) , canActivate:[RouteGuardService] },
  {
    path: 'not-found',
    loadChildren: () => import('./modules/not-found/not-found.module')
      .then(mod => mod.NotFoundModule)
  },
  {path:"", redirectTo:"facture", pathMatch:"full"},
  {path: 'login', component: LoginComponent }
  //{ path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
