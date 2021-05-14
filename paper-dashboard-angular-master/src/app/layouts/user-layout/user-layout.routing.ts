import { UserOrderHistoryComponent } from './../../pages/user-order-history/user-order-history.component';
import { Routes } from '@angular/router';
import { UserComboOrderComponent } from 'app/pages/user-combo-order/user-combo-order.component';
import { UserComboComponent } from 'app/pages/user-combo/user-combo.component';
import { UserMainComponent } from 'app/pages/user-main/user-main.component';
//import { UserOrderComponent } from 'app/pages/user-order/user-order.component';
//import { TableComponent } from '../../pages/table/table.component';
import { LoginComponent } from 'app/pages/login/login.component'


export const UserLayoutRoutes: Routes = [
    { path: 'login',     component: LoginComponent },
    { path: 'user-main',     component: UserMainComponent },
    { path: 'user-order-history',     component: UserOrderHistoryComponent  },
    { path: 'user-combo',     component: UserComboComponent },
    { path: 'user-combo-order',     component: UserComboOrderComponent },
];
