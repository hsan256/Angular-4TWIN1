import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRayonsComponent } from './all-rayons/all-rayons.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"home", component:TestComponent},
  {path:"rayons", component:AllRayonsComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
