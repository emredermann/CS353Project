import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeliveryGuyLayoutRoutes } from './delivery-guy-layout.routing';
//import { DeliverComponent }            from '../../pages/deliver/deliver.component';
//import { TableComponent }           from '../../pages/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryGuyPastAssignmentsComponent } from 'app/pages/delivery-guy-past-assignments/delivery-guy-past-assignments.component';
import { DeliveryGuyRegionSpecificationComponent } from 'app/pages/delivery-guy-region-specification/delivery-guy-region-specification.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DeliveryGuyLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    //DeliverComponent,
    //TableComponent,
    DeliveryGuyPastAssignmentsComponent,
    DeliveryGuyRegionSpecificationComponent,
  ]
})

export class DeliveryGuyLayoutModule {}