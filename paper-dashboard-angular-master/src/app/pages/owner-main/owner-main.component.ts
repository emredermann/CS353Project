import { Component, OnInit } from '@angular/core';

export class Order {
    header: number;
    status: string;
    order: string;
}

export class RestaurantInfo {
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
    public orders: Order[] = [{header: 5, status: "En Route", order: "Hamburger"},
                                {header: 4, status: "Delivered", order: "Cheeseburger"},
                                {header: 3, status: "Delivered", order: "Cheeseburger"},
                                {header: 2, status: "Cancelled by customer", order: "Sandwich"},
                                {header: 1, status: "Delivered", order: "Cheeseburger"}
    ];
    public restaurantinfo: RestaurantInfo = {ownerName: "Ali Veli", restaurantName: "Burger King", 
        restaurantBranch: "Bilkent", restaurantAddress: "ABC"};
    private clicked = false;

    constructor(){

    }

    ngOnInit(){

    }

    getOrderNo(i){
        return this.orders[i].header;
    }

    getStatus(i){
        return this.orders[i].status;
    }

    getOrder(i){
        return this.orders[i].order;
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

