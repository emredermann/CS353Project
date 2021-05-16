import { DeliveryGuyPastAssignmentsComponent } from './../../pages/delivery-guy-past-assignments/delivery-guy-past-assignments.component';
import { DeliveryGuyNewAssignmentsComponent } from './../../pages/delivery-guy-new-assignments/delivery-guy-new-assignments.component';
import { Routes } from '@angular/router';
import { DeliveryGuyRegionSpecificationComponent } from "./../../pages/delivery-guy-region-specification/delivery-guy-region-specification.component";

export const DeliveryGuyLayoutRoutes: Routes = [
    { path : '',         redirectTo:'delivery-guy-past-assignments',          pathMatch:'full'},
    { path: 'delivery-guy-past-assignments',     component: DeliveryGuyPastAssignmentsComponent },
    { path: 'delivery-guy-new-assignments',     component: DeliveryGuyNewAssignmentsComponent },
    { path: 'delivery-guy-region-specification',     component: DeliveryGuyRegionSpecificationComponent },
   
];

