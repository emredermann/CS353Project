import { userOrder } from './../../_models/userOrder';
import { deliveryGuy } from './../../_models/deliveryGuy';

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'delivery-guy-new-assignments-cmp',
    moduleId: module.id,
    templateUrl: 'delivery-guy-new-assignments.component.html'
})

export class DeliveryGuyNewAssignmentsComponent implements OnInit{
    public delGuyInfo: deliveryGuy = {deliveryGuyName: "İhsan Vekil", job: "Delivery Guy", rating: 3.5, joinedOn: "4.3.2020", status :"available"};
    private clicked = false;
    public searchText: string;
    public title = 'New Delivery Assignments';
    
    //There will be one assignment
    assignments: userOrder []=[{ customerName: "Yarak Başı", idNo:1,
        items:['Quarterpounder Cheeseburger with fries', 'Coke Zero (35 mL)', 'Total: $35'],
        date: new Date(), 
        price: 100,
        restaurantName:"BurgerKing",
        restaurantReview:"VeryGood",
        restaurantRating: 5,
        delGuyReview: "Very bad",
        delGuyRating:7,
        restaurantResponse:"Good customer",
        orderState: "pending"}];

    ngOnInit(){ //Database'den çekilecek kısım bu
    }

    getName(){
        return this.delGuyInfo.deliveryGuyName;
    }
    getJob(){
        return this.delGuyInfo.job;
    }
    getRating(){
        return this.delGuyInfo.rating;
    }
    getJoinDate(){
        return this.delGuyInfo.joinedOn;
    }
    getStatus(){
        return this.delGuyInfo.status;
    }

    declineAssignment(){
           this.delGuyInfo.status = "available"; 
    }
    acceptAssignment(){
        this.delGuyInfo.status = "busy";
    }
    actionMethod() {
        console.log("Delivery-guy has been requested!");
  }

}
