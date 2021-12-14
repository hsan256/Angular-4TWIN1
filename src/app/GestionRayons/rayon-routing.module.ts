import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListRayonsComponent } from "./list-rayons/list-rayons.component";


const routes: Routes = [
    { path: "", component: ListRayonsComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RayonRoutingModule {}