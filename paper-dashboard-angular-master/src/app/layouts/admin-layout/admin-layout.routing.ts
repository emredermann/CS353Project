import { Routes } from '@angular/router';
import { DeliverComponent } from '../../pages/deliver/deliver.component';
import { TableComponent } from '../../pages/table/table.component';
import { BusinessComponent } from '../../pages/business/business.component';
import { LoginComponent } from '../../pages/login/login.component';
import { UserComponent } from '../../pages/user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path : '',         redirectTo:'login',          pathMatch:'full'},
    { path: 'login',     component: LoginComponent },
    { path: 'deliver',    component: DeliverComponent },
    { path: 'table',     component: TableComponent },
    { path: 'business',  component: BusinessComponent },
    { path: 'customer',     component: UserComponent }
];
