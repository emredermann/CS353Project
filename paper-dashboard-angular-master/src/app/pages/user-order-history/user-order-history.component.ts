import { UserOrderComponent } from './../user-order/user-order.component';
import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

interface PersonalInfo {
    fullName: string;
    credits: number;
    address: string;
}
interface userOrder{
    idNo:number;
    items: any[];
    date:   Date;
    price: number;
    restaurantReview:string;
    restaurantRating: number;
    delGuyReview: string;
    delGuyRating:number;
    restaurantResponse
    orderState:boolean;
}

@Component({
    selector: 'user-order-history-cmp',
    moduleId: module.id,
    templateUrl: 'user-order-history.component.html'
})

export class UserOrderHistoryComponent implements OnInit{
   orders: userOrder [];
    counter : number;
    user : PersonalInfo;
   /* public title = 'List of Restaurants';
    public searchText: string;
    public info: PersonalInfo;
*/
   
    ngOnInit(){ //Database'den çekilecek kısım bu
        this.counter = 0;
        
    }
    getCustomerName(){
        return this.user.fullName;
    }
    getCredits(){return this.user.credits;}
    getAddress(){return this.user.address; }
    getOrderItems(){
        return  this.orders[this.counter].items;
    }
    getOrderPrice(){
        return this.orders[this.counter].price;
    }
    getMyReview(){
        return this.orders[this.counter].restaurantReview;
    }
    getMyRating(){
       return  this.orders[this.counter].restaurantRating
    }
    // Sending db function
    saveReview(){

    }
    cancelReview(){
        this.orders[this.counter].delGuyReview = "";
        this.orders[this.counter].delGuyRating = null;
    }
    getdelGuyReview(){return this.orders[this.counter].delGuyReview;}
    getdelGuyRating(){return this.orders[this.counter].delGuyRating;}
    getResponse(){
        return this.orders[this.counter].restaurantResponse;
    }
    setOrderDetails(items, price){
        this.orders[this.counter].items = items;
        this.orders[this.counter].price = price;
    }
    setMyReview(myReview, myRating){
        this.orders[this.counter].restaurantReview = myReview;
        this.orders[this.counter].restaurantRating = myRating;
    }
    setDelGuyReview(delGuyReview, delGuyRating){
        this.orders[this.counter].delGuyReview = delGuyReview;
        this.orders[this.counter].delGuyRating = delGuyRating;
    }
    setResponse(response){
        this.orders[this.counter].restaurantResponse =response; 
    }
}
