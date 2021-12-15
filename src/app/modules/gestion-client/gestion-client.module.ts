import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionClientRoutingModule } from './gestion-client-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';


@NgModule({
  declarations: [
    ListClientComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  imports: [
    CommonModule,
    GestionClientRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
   
  ],
  exports: [
    ListClientComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  providers: [
  ],
})
export class GestionClientModule { }
