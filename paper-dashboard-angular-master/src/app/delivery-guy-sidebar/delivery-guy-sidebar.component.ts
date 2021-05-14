import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [

    { path: '/delivery-guy-past-assignments',    title: 'Main Page - Past Assignments',     icon:'nc-bank',    class: '' },
    //{ path: '/new-assignments',       title: 'New Assignments',      icon:'nc-single-02',  class: '' },
    { path: '/delivery-guy-region-specification',               title: 'Specify Delivery Region',     icon:'nc-bank',    class: '' }
];


@Component({
    moduleId: module.id,
    selector: 'delivery-guy-sidebar-cmp',
    templateUrl: 'delivery-guy-sidebar.component.html',
})

export class DeliveryGuySidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}