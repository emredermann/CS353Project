import { Routes } from '@angular/router';
import { TableComponent } from '../../pages/table/table.component';
import { BusinessComponent } from '../../pages/business/business.component';


export const OwnerLayoutRoutes: Routes = [
    { path: 'table',     component: TableComponent },
    { path: 'business',  component: BusinessComponent },

];