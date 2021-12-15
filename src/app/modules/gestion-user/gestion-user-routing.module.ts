import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  {path:"listuser", component:ListUserComponent, children:[
    {path:"detailuser/:role",component:DetailUserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUserRoutingModule { }
