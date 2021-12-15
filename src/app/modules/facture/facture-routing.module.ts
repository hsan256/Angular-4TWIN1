import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { AddFactureComponent } from './component/add-facture/add-facture.component';
import { ListFacturesPayerComponent } from './component/list-factures-payer/list-factures-payer.component';
import { ListFacturesComponent } from './component/list-factures/list-factures.component';
import { UpdateFactureComponent } from './component/update-facture/update-facture.component';

const routes: Routes = [
  {path:"", component:ListFacturesComponent,canActivate:[RouteGuardService]},
  {path:"facturenonpayer", component:ListFacturesComponent,canActivate:[RouteGuardService]},
  {path:"facturepayer", component:ListFacturesPayerComponent,canActivate:[RouteGuardService]},
  {path:"add", component:AddFactureComponent,canActivate:[RouteGuardService]},
  {path:"update/:id", component:UpdateFactureComponent,canActivate:[RouteGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
