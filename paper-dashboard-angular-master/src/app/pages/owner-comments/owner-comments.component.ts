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
    restaurantResponse:string;
    orderState:boolean;
}

interface restaurantOwner{
    name:string;
    id:  number;
    branch:string;
    address:string;
}
@Component({
    selector: 'owner-comments-cmp',
    moduleId: module.id,
    templateUrl: 'owner-comments.component.html'
})

export class OwnerCommentsComponent implements OnInit{
    orders: userOrder [];
    counter : number;
    user : PersonalInfo;
    restaurant: restaurantOwner;
   /* public title = 'List of Restaurants';
    public searchText: string;
    public info: PersonalInfo;
    */
   
    ngOnInit(){                  //Database'den çekilecek kısım bu
        this.counter = 0;
    }
    getRestaurantName(){
        return this.restaurant.name;
    }
    getBranch(){
        return this.restaurant.branch;
    }
    getAddress(){
        return this.restaurant.address;
    }
    getOrderItems(){
        return this.orders[this.counter].items;
    }
    getOrderPrice(){
        return this.orders[this.counter].price;
    }
    getCustomerReview(){return this.orders[this.counter].restaurantReview;}
    getCustomerRating(){return this.orders[this.counter].restaurantRating;}
    // Do we need them
    getdelGuyReview(){return  this.orders[this.counter].delGuyReview;}
    getdelGuyRating(){return  this.orders[this.counter].delGuyRating;}
    //
    getMyResponse(){return  this.orders[this.counter].restaurantResponse;}
   
    setCustomerReview(orderno,myReview, myRating){
        this.orders[orderno].restaurantReview = myReview;
        this.orders[orderno].restaurantRating = myRating;
    }
    setDelGuyReview(orderno,delGuyReview, delGuyRating){
        this.orders[orderno].delGuyReview=delGuyReview;
        this.orders[orderno].delGuyRating = delGuyRating;
    }
    setResponse(orderno,response){
        this.orders[orderno].restaurantResponse = response;
    }


}
