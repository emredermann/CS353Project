import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/login',       title: 'Log In',    icon:'nc-spaceship',  class: '' },
    //{ path: '/dashboard',     title: 'Dashboard',         icon:'',       class: '' },
    //{ path: '/maps',          title: 'Map', icon:'nc-pin-3',      class: '' },
    { path: '/user',       title: 'Sign Up To User',    icon:'nc-bell-55',  class: '' },
    { path: '/business', title: 'Add business account',     icon:'nc-bank',    class: '' },
    { path: '/deliver',          title: 'Sign Up To Deliver',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Available Restaurants',        icon:'nc-tile-56',    class: '' }
];

export const ROUTES_USER: RouteInfo[] = [
    { path: '/login',       title: 'Log In',    icon:'nc-spaceship',  class: '' },
    //{ path: '/dashboard',     title: 'Dashboard',         icon:'',       class: '' },
    //{ path: '/maps',          title: 'Map', icon:'nc-pin-3',      class: '' },
    { path: '/user',       title: 'Sign Up To User',    icon:'nc-bell-55',  class: '' },
    { path: '/business', title: 'Add business account',     icon:'nc-bank',    class: '' },
    { path: '/deliver',          title: 'Sign Up To Deliver',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Available Restaurants',        icon:'nc-tile-56',    class: '' }
];

export const ROUTES_DELIVERY: RouteInfo[] = [
    { path: '/login',       title: 'Log In',    icon:'nc-spaceship',  class: '' },
    //{ path: '/dashboard',     title: 'Dashboard',         icon:'',       class: '' },
    //{ path: '/maps',          title: 'Map', icon:'nc-pin-3',      class: '' },
    { path: '/user',       title: 'Sign Up To User',    icon:'nc-bell-55',  class: '' },
    { path: '/business', title: 'Add business account',     icon:'nc-bank',    class: '' },
    { path: '/deliver',          title: 'Sign Up To Deliver',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Available Restaurants',        icon:'nc-tile-56',    class: '' }
];

export const ROUTES_OWNER: RouteInfo[] = [
    { path: '/login',       title: 'Log In',    icon:'nc-spaceship',  class: '' },
    //{ path: '/dashboard',     title: 'Dashboard',         icon:'',       class: '' },
    //{ path: '/maps',          title: 'Map', icon:'nc-pin-3',      class: '' },
    { path: '/user',       title: 'Sign Up To User',    icon:'nc-bell-55',  class: '' },
    { path: '/business', title: 'Add business account',     icon:'nc-bank',    class: '' },
    { path: '/deliver',          title: 'Sign Up To Deliver',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Available Restaurants',        icon:'nc-tile-56',    class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
