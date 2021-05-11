import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { DeliverComponent } from '../../pages/deliver/deliver.component';
import { TableComponent } from '../../pages/table/table.component';
import { MapsComponent } from '../../pages/maps/maps.component';
//import { BusinessComponent } from '../../pages/business/business.component';
import { LoginComponent } from '../../pages/login/login.component';
//import { UserComponent } from '../../pages/user/user.component';

export const DeliveryGuyLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'deliver',    component: DeliverComponent },
    { path: 'table',     component: TableComponent },
    { path: 'maps',      component: MapsComponent },
    //{ path: 'business',  component: BusinessComponent },
    //{ path: 'user',     component: UserComponent },
    { path: 'login',     component: LoginComponent }
];