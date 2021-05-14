import { restaurantOwner } from './../../_models/restaurantOwner';
import { PersonalInfo } from './../../_models/Personalnfo';
import { userOrder } from './../../_models/userOrder';
import { UserOrderComponent } from './../user-order/user-order.component';
import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
 


@Component({
    selector: 'owner-comments-cmp',
    moduleId: module.id,
    templateUrl: 'owner-comments.component.html'
})
 
export class OwnerCommentsComponent implements OnInit{
    orders: userOrder [];
    counter : number;
    public user: PersonalInfo = {fullName :"emre", credits: 0,address : "izmir"};
    public restaurant: restaurantOwner = {name : "burgerKing", id:1, branch:"çankaya", address:"Bilkent"};
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

    get ownerName(){return this.user.fullName;}
    get RestaurantName(){return this.restaurant.name;}
    get Branch(){return this.restaurant.branch;}
    get Address(){return this.restaurant.address;}

    getCustomerReview(){return this.orders[this.counter].restaurantReview;}
    getCustomerRating(){return this.orders[this.counter].restaurantRating;}
    
    // Do we need them
    getdelGuyReview(){return  this.orders[this.counter].delGuyReview;}
    getdelGuyRating(){return  this.orders[this.counter].delGuyRating;}
    
   
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
