import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeliveryGuyLayoutRoutes } from './delivery-guy-layout.routing';
import { DeliverComponent }            from '../../pages/deliver/deliver.component';
import { TableComponent }           from '../../pages/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DeliveryGuyLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DeliverComponent,
    TableComponent,

  ]
})

export class DeliveryGuyLayoutModule {}