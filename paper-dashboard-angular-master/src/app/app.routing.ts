import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
export const AppRoutes: Routes = [
  {
    path: 'login',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
     }
    ]
  },/*{
    path: 'deliver',
    component: Delivery-guyLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/delivery-guy-layout/delivery-guy.module#Delivery-guyLayoutModule'
     }
    ]
   }*/
  /*,{
    path: 'business',
    component: OwnerLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/owner-layout/owner-layout.module#OwnerLayoutModule'
     }
    ]
  },*/
  {
    path: '**',
    redirectTo: 'login'
  }
]

