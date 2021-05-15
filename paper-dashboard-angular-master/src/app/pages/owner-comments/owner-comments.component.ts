import { restaurantOwner } from './../../_models/restaurantOwner';
import { PersonalInfo } from './../../_models/Personalnfo';
import { userOrder } from './../../_models/userOrder';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'owner-comments-cmp',
    moduleId: module.id,
    templateUrl: 'owner-comments.component.html'
})
 
export class OwnerCommentsComponent implements OnInit{
    public orders: userOrder [] = [{customerName: "İnsan Çocuğu", idNo: 5, items: ["abc","cde"], date: new Date(), price: 120.45, 
                    restaurantName: "Burger King", restaurantReview: "Nice!", restaurantRating: 3.5, delGuyReview:"Cool!",delGuyRating: 3.9,
                    restaurantResponse:"Thanks!",orderState: "Delivered"},
                    {customerName: "İnsan Çocuğu 2", idNo: 3, items: ["adf","dsg"], date: new Date(), price: 30.15, 
                    restaurantName: "ASPAVA", restaurantReview: "Nice!", restaurantRating:4.5, delGuyReview:"Cool!",delGuyRating: 3.9,
                    restaurantResponse:"No Thanks!",orderState: "Delivered"},
                    {customerName: "İnsan Çocuğu 3", idNo: 4, items: ["çükbaş","amcıkağaz"], date: new Date(), price: 21.15, 
                    restaurantName: "PİZZA", restaurantReview: "Dick!", restaurantRating:0.5, delGuyReview:"BRUH!",delGuyRating: 3.9,
                    restaurantResponse:"No Thanks!",orderState: "En Route"}];

    public counter : number;
    public user: PersonalInfo = {fullName :"emre", credits: 0,address : "izmir"};
    public restaurant: restaurantOwner = {name : "Ali Veli", restaurantName:"bURGER kİNG", id:1, branch:"çankaya", address:"Bilkent"};
    public closeResult = '';
    public responseStatus: string;

    constructor(private modalService: NgbModal)
    {}
   
    ngOnInit(){                  //Database'den çekilecek kısım bu
      this.counter = 0;
      this.responseStatus = '';
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `${result}`;
        }, (reason) => {
          this.closeResult = `${this.getDismissReason(reason)}`;
        });
      }

      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return '';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return '';
        } else {
          return ``;
        }
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
   
    setCustomerReview(i){
      this.counter = i;
    }
    setDelGuyReview(i){
      this.counter = i;
    }
    setResponse(i){
      this.counter = i;
    }

    getOrderNo(i){
      return this.orders[i].idNo;
    }
    getStatus(i){
      return this.orders[i].orderState;
    }

    getOrder(i){
      return this.orders[i].items;
    }

    saveResponse(){
      this.responseStatus = 'Response Saved!';
    }
    cancelResponse(){

    }


}
