import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"home", component:TestComponent},
  {path:"listclient", component:ListClientComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
