import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTES: RouteInfo[] = [
    //{ path: '/login',           title: 'Log In',    icon:'nc-spaceship',  class: '' },
    { path: '/user-main',    title: 'Choose Restaurant',   icon:'nc-tile-56',    class: '' },
    { path: '/user-order-history',   title: 'Order History',      icon:'nc-single-02',  class: '' },
    { path: '/user-combo',           title: 'Customize Combos',     icon:'nc-bank',    class: '' },
    { path: '/user-combo-order',   title: 'Order Combos',      icon:'nc-single-02',  class: '' }
];


@Component({
    moduleId: module.id,
    selector: 'customer-sidebar-cmp',
    templateUrl: 'customer-sidebar.component.html',
})

export class CustomerSidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
