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
    selector: 'owner-item-menu-editor-cmp',
    moduleId: module.id,
    templateUrl: 'owner-item-menu-editor.component.html'
})

export class OwnerMenuItemEditorComponent implements OnInit{
    public tableData1: Orders;
    public restaurantinfo: RestaurantInfo;
    private clicked = false;

 

    ngOnInit(){}
 
}
