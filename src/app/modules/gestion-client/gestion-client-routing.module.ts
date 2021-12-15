import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/app/Services/route-guard.service';
import { AddClientComponent } from './add-client/add-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [

  {path:"listclient", component:ListClientComponent,canActivate:[RouteGuardService]},
  {path:"addclient", component:AddClientComponent,canActivate:[RouteGuardService]}, // , canActivate:[UserGuard]
  {path:"updateclient/:id", component:UpdateClientComponent,canActivate:[RouteGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionClientRoutingModule { }
