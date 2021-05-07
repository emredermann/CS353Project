import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { RestaurantsComponent } from '../../pages/restaurants/restaurants.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { BusinessComponent } from '../../pages/business/business.component';
import { LoginComponent } from '../../pages/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'restaurants',          component: RestaurantsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'business',  component: BusinessComponent },
    { path: 'login',        component: LoginComponent }
];
