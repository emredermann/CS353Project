import { DeliveryGuyPastAssignmentsComponent } from './../../pages/delivery-guy-past-assignments/delivery-guy-past-assignments.component';
import { Routes } from '@angular/router';
import { DeliverComponent } from '../../pages/deliver/deliver.component';
import { DeliveryGuyRegionSpecificationComponent } from "./../../pages/delivery-guy-region-specification/delivery-guy-region-specification.component"
import { TableComponent } from '../../pages/table/table.component';

export const DeliveryGuyLayoutRoutes: Routes = [
    { path: 'deliver',    component: DeliverComponent },
    { path: 'table',     component: TableComponent },
 //   { path: 'delivery-guy-new-assignments',     component: DeliveryGuyNewAssignmentComponent },
    { path: 'delivery-guy-past-assignments',     component: DeliveryGuyPastAssignmentsComponent },
    { path: 'delivery-guy-region-specification',     component: DeliveryGuyRegionSpecificationComponent },
    
];