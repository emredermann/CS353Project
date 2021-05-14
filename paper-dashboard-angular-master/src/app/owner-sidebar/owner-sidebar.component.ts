import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/owner/owner-main',    title: 'Owner Main',     icon:'nc-spaceship',    class: '' },
    { path: '/owner/owner-comments',       title: 'Respond to Reviews',      icon:'nc-bell-55',  class: '' },
    { path: '/owner/owner-menu-editor',       title: 'Edit Menu',      icon:'nc-bell-55',  class: '' },
    { path: '/owner/owner-menu-item-editor',       title: 'Edit Menu Item',      icon:'nc-bank',  class: '' },
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