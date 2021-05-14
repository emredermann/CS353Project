import { DeliveryGuyPastAssignmentsComponent } from './../../pages/delivery-guy-past-assignments/delivery-guy-past-assignments.component';
//import { DeliveryGuyNewAssignmentsComponent } from './../../pages/delivery-guy-new-assignments/delivery-guy-new-assignments.component';
import { Routes } from '@angular/router';
import { DeliverComponent } from '../../pages/deliver/deliver.component';
import { DeliveryGuyRegionSpecificationComponent } from "./../../pages/delivery-guy-region-specification/delivery-guy-region-specification.component"
//import { TableComponent } from '../../pages/table/table.component';
import { LoginComponent } from 'app/pages/login/login.component'

export const DeliveryGuyLayoutRoutes: Routes = [
    { path: 'login, component: LoginComponent'},
    { path: 'deliver',    component: DeliverComponent },
    //{ path: 'table',     component: TableComponent },
    { path: 'past-assignments',     component: DeliveryGuyPastAssignmentsComponent },
    //{ path: 'new-assignments',     component: DeliveryGuyNewAssignmentsComponent },
    { path: 'specify-region',     component: DeliveryGuyRegionSpecificationComponent },
];

