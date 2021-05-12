import { Routes } from '@angular/router';
import { DeliverComponent } from '../../pages/deliver/deliver.component';
import { TableComponent } from '../../pages/table/table.component';

export const DeliveryGuyLayoutRoutes: Routes = [
    { path: 'deliver',    component: DeliverComponent },
    { path: 'table',     component: TableComponent },
];