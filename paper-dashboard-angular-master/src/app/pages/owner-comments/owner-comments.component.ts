import { restaurantOwner } from './../../_models/restaurantOwner';
import { PersonalInfo } from '../../_models/PersonalInfo';
import { userOrder } from './../../_models/userOrder';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'app/_services/order-service/order.service';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';

@Component({
    selector: 'owner-comments-cmp',
    moduleId: module.id,
    templateUrl: 'owner-comments.component.html'
})
 
export class OwnerCommentsComponent implements OnInit{
    public orders = [];/*: userOrder [] = [{customerName: "İnsan Çocuğu", idNo: 5, items: ["abc","cde"], date: new Date(), price: 120.45, 
                    restaurantName: "Burger King", restaurantReview: "Nice!", restaurantRating: 3.5, delGuyReview:"Cool!",delGuyRating: 3.9,
                    restaurantResponse:"Thanks!",orderState: "Delivered"},
                    {customerName: "İnsan Çocuğu 2", idNo: 3, items: ["adf","dsg"], date: new Date(), price: 30.15, 
                    restaurantName: "ASPAVA", restaurantReview: "Nice!", restaurantRating:4.5, delGuyReview:"Cool!",delGuyRating: 3.9,
                    restaurantResponse:"No Thanks!",orderState: "Delivered"},
                    {customerName: "İnsan Çocuğu 3", idNo: 4, items: ["bişey","başka bişey"], date: new Date(), price: 21.15, 
                    restaurantName: "PİZZA", restaurantReview: "Dick!", restaurantRating:0.5, delGuyReview:"BRUH!",delGuyRating: 3.9,
                    restaurantResponse:"No Thanks!",orderState: "En Route"}];*/

    public counter : number;
    public user: PersonalInfo = {fullName :"emre", credits: 0,address : "izmir"};
    public restaurantinfo: restaurantOwner = {name: "Ali Veli", restaurantName: "Burger King", 
    id: 4,branch:"Bilkent" ,address: "ABC" };
    public closeResult = '';
    public responseStatus: string;
    public currentOrder;
    public orderDetail = [];
    constructor(private modalService: NgbModal,private orderService:OrderService,private authService:AuthenticationService)
    {}
   
    ngOnInit(){                  //Database'den çekilecek kısım bu
      this.counter = 0;
      this.responseStatus = '';
      this.updatePage();

    }

    updatePage(){
        let id = this.authService.getCurrentUserId();
        
        this.orderService.getReviews(id).pipe().subscribe(data => {  
            //console.log(this.orders);
            this.orders = data;
            
         });
    }
    open(content,order_no) {
      this.getOrderDetails(order_no);
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

    getOwnerName(){
      return this.restaurantinfo.name;
    }

    getRestaurantName(){
        return this.restaurantinfo.restaurantName;
    }
    getBranch(){
        return this.restaurantinfo.branch;
    }
    getAddress(){
        return this.restaurantinfo.address;
    }
    getOrderItems(){
        return this.orders[this.counter].items;
    }
    getOrderPrice(){
        return this.orders[this.counter].price;
    }

    get ownerName(){return this.user.fullName;}
    get RestaurantName(){return this.restaurantinfo.name;}
    get Branch(){return this.restaurantinfo.branch;}
    get Address(){return this.restaurantinfo.address;}

    getCustomerReview(){return this.orders.filter((item)=>item.ORDER_NO === this.counter)[0].RESTAURANTREVIEW;}
    getCustomerRating(){return this.orders.filter((item)=>item.ORDER_NO === this.counter)[0].RESTAURANTRATING;}
    
    // Do we need them
    getdelGuyReview(){return  this.orders.filter((item)=>item.ORDER_NO === this.counter)[0].DELIVERYGUYREVIEW;}
    getdelGuyRating(){return  this.orders.filter((item)=>item.ORDER_NO === this.counter)[0].DELIVERYGUYRATING;}
    
   
    getMyResponse(){return  this.orders[this.counter].restaurantResponse;}
   
    setCustomerReview(i){
      this.counter = i;
      //this.currentOrder = this.orders.filter(a=> a.ORDER_NO = order_no);
    }
    setDelGuyReview(i){
      this.counter = i;
      //this.currentOrder = this.orders.filter(a=> a.ORDER_NO = order_no)
    }
    setResponseIndex(i){
      this.counter = i;
      //this.getOrderDetails(order_no);
      //this.currentOrder = this.orders.filter(a=> a.ORDER_NO = order_no)
    }
    setResponse(e){
      //this.orders[this.counter].restaurantResponse = e.target.value;
    }

    getOrderNo(i){
      return this.orders[i].ORDER_NO;
    }
    getStatus(i){
      return this.orders[i].ORDERSTATE;
    }

    getOrder(i){
      return this.orders[i].items;
    }

      saveResponse(e){
          
      }

      
      getOrderDetails(order_no:number){
        //let id_user = this.authService.getCurrentUserId();
        this.orderService.getOrderDetails(order_no).pipe().subscribe(data => {  
            
            this.orderDetail = data;
        
        });
      }
}
