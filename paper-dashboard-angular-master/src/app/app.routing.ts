import { Routes } from '@angular/router';
import { DeliveryGuyLayoutComponent } from './layouts/delivery-guy-layout/delivery-guy-layout.component';
import { OwnerLayoutComponent } from './layouts/owner-layout/owner-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
<<<<<<< HEAD
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
=======
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
      /*
      {
        
        path: '',
        redirectTo: 'login'
      }
      */
    ]
  },
<<<<<<< HEAD
=======
  /*
>>>>>>> 984caf584701deb66738bf329dded77e4c4863be
>>>>>>> ebc33e268caf4a869f43c451225bc8478a1c2a23
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
     }
    ]
<<<<<<< HEAD
  },{
    path: 'deliver',
=======
  },
  {
    path: 'delivery',
>>>>>>> 984caf584701deb66738bf329dded77e4c4863be
    component: DeliveryGuyLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/delivery-guy-layout/delivery-guy.module#DeliveryGuyLayoutModule'
     }
    ]
   }
  ,{
    path: 'business',
    component: OwnerLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/owner-layout/owner-layout.module#OwnerLayoutModule'
     }
    ]
  },
  /*
  {
    path: '',
    redirectTo: 'login'
  },
  */
  {
    path: '**',
    redirectTo: ''
  }
]

