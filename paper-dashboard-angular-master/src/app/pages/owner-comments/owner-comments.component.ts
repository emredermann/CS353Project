import { restaurantOwner } from './../../_models/restaurantOwner';
import { PersonalInfo } from '../../_models/PersonalInfo';
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
                    {customerName: "İnsan Çocuğu 3", idNo: 4, items: ["bişey","başka bişey"], date: new Date(), price: 21.15, 
                    restaurantName: "PİZZA", restaurantReview: "Dick!", restaurantRating:0.5, delGuyReview:"BRUH!",delGuyRating: 3.9,
                    restaurantResponse:"No Thanks!",orderState: "En Route"}];

    public counter : number;
    public user: PersonalInfo = {fullName :"emre", credits: 0,address : "izmir"};
    public restaurantinfo: restaurantOwner = {name: "Ali Veli", restaurantName: "Burger King", 
    id: 4,branch:"Bilkent" ,address: "ABC" };
    public closeResult = '';
    public responseStatus: string;
    public currentOrder: userOrder;

    constructor(private modalService: NgbModal)
    {}
   
    ngOnInit(){                  //Database'den çekilecek kısım bu
      this.counter = 0;
      this.responseStatus = '';
      this.currentOrder = {customerName: "", idNo: 5, items: ["",""], date: new Date(), price: 0, 
        restaurantName: "", restaurantReview: "", restaurantRating: 0, delGuyReview:"!",delGuyRating: 0,
        restaurantResponse:"",orderState: ""};
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

      setRestaurantReview(review, rating){
        this.currentOrder.restaurantReview =review;
        this.currentOrder.restaurantRating =rating;
      }
      setDelGuyReview(review, rating){
        this.currentOrder.delGuyReview =review;
        this.currentOrder.delGuyRating =rating;
      }
  
      setOrderDetails(items, price){
        this.currentOrder.items = items;
        this.currentOrder.price = price;
      }
      setResponse(response){
        this.currentOrder.restaurantResponse =response;
      }
     

      saveResponse(e){
          
      }

}
