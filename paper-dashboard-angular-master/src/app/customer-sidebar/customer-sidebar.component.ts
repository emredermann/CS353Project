import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ROUTES: RouteInfo[] = [
    { path: '/login',           title: 'Log In',    icon:'nc-spaceship',  class: '' },
    { path: '/customer-main',    title: 'Choose Restaurant',   icon:'nc-tile-56',    class: '' },
    { path: '/order-history',   title: 'Order History',      icon:'nc-single-02',  class: '' },
    { path: '/combo',           title: 'Customize Combos',     icon:'nc-bank',    class: '' },
    { path: '/combo-order',   title: 'Order Combos',      icon:'nc-single-02',  class: '' }
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
