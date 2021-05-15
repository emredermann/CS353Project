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
    public searchText: string;
    public title = 'New Delivery Assignments';
    public region: string [] = ["cankaya", "beytepe", "bilkent", "çayyolu", "adapazarı"];
    public clicked: boolean;
    public selectedRegion: string ;
    public filteredRestaurantName:string;
    public filteredAssignmentCount:number;
    public currentAssignment: number;
    //There will be one assignment
    assignments: userOrder []=[{ customerName: "Dr.Who", idNo:1,
        items:['Quarterpounder Cheeseburger with fries', 'Coke Zero (35 mL)', 'Total: $35'],
        date: new Date(), 
        price: 100,
        restaurantName:"BurgerKing",
        restaurantReview:"VeryGood",
        restaurantRating: 5,
        delGuyReview: "Very bad",
        delGuyRating:7,
        restaurantResponse:"Good customer",
        orderState: "pending"},{ customerName: "Dr.Who", idNo:2,
        items:['Quarterpounder Cheeseburger with fries', 'Coke Zero (35 mL)', 'Total: $35'],
        date: new Date(), 
        price: 100,
        restaurantName:"Adana",
        restaurantReview:"VeryGood",
        restaurantRating: 5,
        delGuyReview: "Very bad",
        delGuyRating:7,
        restaurantResponse:"Good customer",
        orderState: "pending"},{ customerName: "Dr.Who", idNo:3,
        items:['Quarterpounder Cheeseburger with fries', 'Coke Zero (35 mL)', 'Total: $35'],
        date: new Date(), 
        price: 100,
        restaurantName:"Local",
        restaurantReview:"VeryGood",
        restaurantRating: 5,
        delGuyReview: "Very bad",
        delGuyRating:7,
        restaurantResponse:"Good customer",
        orderState: "pending"},];

        filteredAssignment:userOrder [];

    ngOnInit(){ //Database'den çekilecek kısım bu
    }
    regionSet(e){
        this.selectedRegion = e.target.value;
        alert(this .selectedRegion);
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

    changeRestaurantSelection(e){
            this.filteredRestaurantName = e.value.target;
            alert( this.filteredRestaurantName);
    }
    declineAssignment(){
           this.delGuyInfo.status = "available"; 
           this.clicked = true;
    }
    acceptAssignment(e){
        this.delGuyInfo.status = "busy";
        this.clicked = true;
        this.currentAssignment = e.target.value;
        this.actionMethod();
    }
    actionMethod() {
       alert("You are assigned to!"+this.currentAssignment);
  }

}
