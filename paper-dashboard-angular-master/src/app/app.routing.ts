import { Component } from '@angular/core';
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
        { path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}]
  },
  {
    path: 'delivery',
    component: DeliveryGuyLayoutComponent,
    children: [
      { path: '', loadChildren: './layouts/delivery-guy-layout/delivery-guy-layout.module#DeliveryGuyLayoutModule' }]
  },
  {
    path: 'owner',
    component: OwnerLayoutComponent,
    children: [
      { path: '', loadChildren: './layouts/owner-layout/owner-layout.module#OwnerLayoutModule' }]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [ 
      { path: '', loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule' }]
  },
  
  {
    path: '**', redirectTo:'', pathMatch:'full'
  }
  
]


