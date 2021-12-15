import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2OrderModule } from "ng2-order-pipe";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { NgxPaginationModule } from "ngx-pagination";
import { ListRayonsComponent } from "./list-rayons/list-rayons.component";
import { RayonRoutingModule } from "./rayon-routing.module";

@NgModule({
    declarations: [
        ListRayonsComponent
    ],
    imports: [
        RouterModule, 
        CommonModule,
        FormsModule,
        NgbModule,
        Ng2SearchPipeModule,
        Ng2OrderModule,
        NgxPaginationModule,
        RayonRoutingModule
    ]
})

export class RayonModule {}