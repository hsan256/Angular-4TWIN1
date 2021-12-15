import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { AddFactureComponent } from './component/add-facture/add-facture.component';
import { UpdateFactureComponent } from './component/update-facture/update-facture.component';
import { ListFacturesComponent } from './component/list-factures/list-factures.component';
import { ListFacturesPayerComponent } from './component/list-factures-payer/list-factures-payer.component';
import { DetailFactureComponent } from './component/detail-facture/detail-facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AddFactureComponent,
    UpdateFactureComponent,
    ListFacturesComponent,
    ListFacturesPayerComponent,
    DetailFactureComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
