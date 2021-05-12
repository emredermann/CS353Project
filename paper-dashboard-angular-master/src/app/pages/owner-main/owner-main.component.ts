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
    selector: 'owner-main-cmp',
    moduleId: module.id,
    templateUrl: 'owner-main.component.html'
})

export class OwnerMainComponent implements OnInit{
    public tableData1: Orders;
    public restaurantinfo: RestaurantInfo;
    private clicked = false;

    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Order No.', 'Status', 'Availability'],
            orderRows: [
                ['Order #53', 'Being Prepared'],
                ['Order #52', 'Being prepared'],
                ['Order #51', 'En Route'],
                ['Order #50', 'Delivered'],
                ['Order #49', 'Delivered'],
                ['Order #48', 'Cancelled by customer']
            ]
        };    
    }

    getOrderNo(row: string[]){
        return row[0];
    }

    getStatus(row: string[]){
        return row[1];
    }

    getOwnerName(){
        return this.restaurantinfo.ownerName;
    }

    getRestaurantName(){
        return this.restaurantinfo.restaurantName;
    }

    getBranch(){
        return this.restaurantinfo.restaurantBranch;
    }

    getAddress(){
        return this.restaurantinfo.restaurantAddress;
    }

    actionMethod() {
        console.log("Delivery-guy has been requested!");
  }
}
