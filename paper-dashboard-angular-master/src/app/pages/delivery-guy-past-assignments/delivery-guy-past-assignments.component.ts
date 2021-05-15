import { userOrder } from './../../_models/userOrder';
import { deliveryGuy } from './../../_models/deliveryGuy';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'delivery-guy-past-assignments-cmp',
    moduleId: module.id,
    templateUrl: 'delivery-guy-past-assignments.component.html'
})

export class DeliveryGuyPastAssignmentsComponent implements OnInit{
    public delGuyInfo: deliveryGuy = {deliveryGuyName: "İhsan Vekil", job: "Delivery Guy", rating: 3.5, joinedOn: "4.3.2020" ,status:"pending"};
    public searchText: string;
    public title = 'Past Delivery Assignments';

    public assignments : userOrder[]= [{
    customerName: "İnsan Çocuğu",
    idNo:1,
    items: ['Quarterpounder Hamburger with fries', 'Coke Zero (35 mL)', 'Total: $35'],
    date: new Date(),
    price: 124,
    restaurantName:"McDonalds",
    restaurantReview:"Very Good",
    restaurantRating: 12,
    delGuyReview: "Very Bad",
    delGuyRating:4,
    restaurantResponse:"Test",
    orderState:"pending"},

    {customerName: "İnsan Çocuğu2",
    idNo:1,
    items: ['Quarterpounder Hamburger with fries', 'Coke Zero (35 mL)', 'Total: $35'],
    date: new Date(),
    price: 124,
    restaurantName:"McDonalds",
    restaurantReview:"Very Good",
    restaurantRating: 12,
    delGuyReview: "Very Bad",
    delGuyRating:4,
    restaurantResponse:"Test",
    orderState:"pending"}
    ];
    
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

    actionMethod() {
        console.log("Delivery-guy has been requested!");
  }
}
