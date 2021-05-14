import { UserOrderComponent } from './../user-order/user-order.component';
import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

export class PersonalInfo {
    fullName: string;
    credits: number;
    address: string;
}
export class userOrder{
    idNo:number;
    items: string;
    date:  string;
    price: number;
    restaurantReview:string;
    restaurantRating: number;
    delGuyReview: string;
    delGuyRating:number;
    restaurantResponse: string;
    orderState:boolean;
}

@Component({
    selector: 'user-order-history-cmp',
    moduleId: module.id,
    templateUrl: 'user-order-history.component.html'
})

export class UserOrderHistoryComponent implements OnInit{
    orders: userOrder[] = [{idNo: 5, items: "pickles and shrooms", date: "2019-01-16", 
                        price: 15, restaurantReview: "Great!", restaurantRating: 3.5, delGuyReview: "Not so great",
                        delGuyRating: 2.6, restaurantResponse: "Nice!", orderState: true}, 
                        {idNo: 5, items: "pickles and shrooms", date: "2019-01-16", 
                        price: 15, restaurantReview: "Great!", restaurantRating: 3.5, delGuyReview: "Not so great",
                        delGuyRating: 2.6, restaurantResponse: "Nice!", orderState: true}
                    ];
    counter : number;
    user: PersonalInfo = {fullName: "Kemal Kılıçdaroğlu", credits: 120.43, address:"Somewhere in bilkent" };

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
