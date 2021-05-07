import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SignUpComponent } from '../../pages/signup/signup.component';
import { TableComponent } from '../../pages/table/table.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { BusinessComponent } from '../../pages/business/business.component';
import { LoginComponent } from '../../pages/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'signup',           component: SignUpComponent },
    { path: 'table',          component: TableComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'business',  component: BusinessComponent },
    { path: 'login',        component: LoginComponent }
];
