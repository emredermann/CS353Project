import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeliveryGuyLayoutRoutes } from './delivery-guy-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryGuyPastAssignmentsComponent } from 'app/pages/delivery-guy-past-assignments/delivery-guy-past-assignments.component';
import { DeliveryGuyRegionSpecificationComponent } from 'app/pages/delivery-guy-region-specification/delivery-guy-region-specification.component';
//import { DeliveryGuyNewAssignmentsComponent } from 'app/pages/delivery-guy-new-assignments/delivery-guy-new-assignments.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DeliveryGuyLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DeliveryGuyPastAssignmentsComponent,
    //DeliveryGuyNewAssignmentsComponent,
    DeliveryGuyRegionSpecificationComponent,
  ]
})

export class DeliveryGuyLayoutModule {}