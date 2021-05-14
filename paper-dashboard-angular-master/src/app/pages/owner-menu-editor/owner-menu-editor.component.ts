import { Component, OnInit } from '@angular/core';

interface Orders {
    headerRow: string[];
    orderRows: string[][];
}

export class RestaurantInfo {
    ownerName: string;
    restaurantName: string;
    restaurantBranch: string;
    restaurantAddress: string;
}

@Component({
    selector: 'owner-menu-editor-cmp',
    moduleId: module.id,
    templateUrl: 'owner-menu-editor.component.html'
})

export class OwnerMenuEditorComponent implements OnInit{
    public tableData1: Orders;
    public restaurantinfo: RestaurantInfo = {ownerName: "Ali Veli", restaurantName: "Burger King", 
    restaurantBranch: "Bilkent", restaurantAddress: "ABC"};
    private clicked = false;

    constructor(){

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
