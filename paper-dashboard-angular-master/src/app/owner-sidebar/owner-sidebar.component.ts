import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/login',               title: 'Log In',    icon:'nc-spaceship',  class: '' },
    //{ path: '/business', title: 'Add Business Account',     icon:'nc-bank',    class: '' },
    { path: '/comments',    title: 'View Reviews and Ratings',     icon:'nc-bank',    class: '' },
    { path: '/owner-menu-editor',       title: 'Edit Menu',      icon:'nc-single-02',  class: '' },
    { path: '/owner-menu-item-editor',       title: 'Edit Menu Item',      icon:'nc-single-02',  class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'owner-sidebar-cmp',
    templateUrl: 'owner-sidebar.component.html',
})

export class OwnerSidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}