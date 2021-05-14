import { Component, OnInit } from '@angular/core';

interface Orders {
    headerRow: string[];
    orderRows: string[][];
}

interface RestaurantInfo {
    ownerName: string;
    restaurantName: string;
    restaurantBranch: string;
    restaurantAddress: string;
}

@Component({
    selector: 'owner-menu-item-editor-cmp',
    moduleId: module.id,
    templateUrl: 'owner-menu-item-editor.component.html'
})

export class OwnerMenuItemEditorComponent implements OnInit{
    public tableData1: Orders;
    public restaurantinfo: RestaurantInfo;
    private clicked = false;

    constructor(){

        this.restaurantinfo.ownerName = "Ali Veli";
        this.restaurantinfo.restaurantName = "Burger King";
        this.restaurantinfo.restaurantBranch = "Bilkent Branch";
        this.restaurantinfo.restaurantAddress = "No. 31, Universiteler Mahallesi";
    }

    ngOnInit(){}

    getRestaurantName(){
        return this.restaurantinfo.restaurantName;
    }
    getBranch(){
        return this.restaurantinfo.restaurantBranch;
    }
    getAddress(){
        return this.restaurantinfo.restaurantAddress;
    }
    getOwnerName(){
        return this.restaurantinfo.ownerName;
    }
 
}
