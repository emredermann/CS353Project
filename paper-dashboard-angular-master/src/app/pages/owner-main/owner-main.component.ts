import { restaurantOwner } from './../../_models/restaurantOwner';
import { userOrder } from './../../_models/userOrder';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'app/_services/order-service/order.service';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';


@Component({
    selector: 'owner-main-cmp',
    moduleId: module.id,
    templateUrl: 'owner-main.component.html'
})

export class OwnerMainComponent implements OnInit{

    public orderDetail = [];
    
    public orders = [];/*: userOrder [] = [{customerName: "İnsan Çocuğu", idNo: 5, items: ["Hamburger"," Hamburger"], date: new Date(), price: 120.45, 
                    restaurantName: "Burger King", restaurantReview: "Nice!", restaurantRating:4.5, delGuyReview:"Cool!",delGuyRating: 3.9,
                    restaurantResponse:"Thanks!",orderState: "Delivered"},
                    {customerName: "İnsan Çocuğu 2", idNo: 3, items: ["Cheeseburger"," Sandwich"], date: new Date(), price: 30.15, 
                    restaurantName: "ASPAVA", restaurantReview: "Nice!", restaurantRating:4.5, delGuyReview:"Cool!",delGuyRating: 3.9,
                    restaurantResponse:"Thanks!",orderState: "Waiting"},
                    {customerName: "İnsan Çocuğu 3", idNo: 5, items: ["Cheeseburger"," Cheeseburger"], date: new Date(), price: 142.45, 
                    restaurantName: "Pizza", restaurantReview: "Nice!", restaurantRating:4.5, delGuyReview:"Cool!",delGuyRating: 2.1,
                    restaurantResponse:"Thanks!",orderState: "Delivered"},
                ];*/

    public restaurantinfo: restaurantOwner = {name: "Ali Veli", restaurantName: "Burger King", id: 4,branch:"Bilkent" ,address: "ABC" };
    private clicked = false;
    public closeResult = '';
    public counter: number;

    constructor(private modalService: NgbModal,private orderService:OrderService,private authService:AuthenticationService){

    }

    ngOnInit(){
        this.counter = 0;
        this.updatePage();

    }

    updatePage(){
        let id = this.authService.getCurrentUserId();
        
        this.orderService.getOrderHistory(id).pipe().subscribe(data => {  
            
            this.orders = data;
            
         });
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }

      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
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

    actionMethod() {
        console.log("Delivery-guy has been requested!");
    }

    getOrderItems(){
        return this.orders[this.counter].items;
    }
    getOrderPrice(){
        return this.orders[this.counter].price;
    }

    check(status: string){
        if (status === 'Waiting')
            return false;
        
        return true;
    }

    setInfo(order_no){

        //let id_user = this.authService.getCurrentUserId();
        this.orderService.getOrderDetails(order_no).pipe().subscribe(data => {  
            
            this.orderDetail = data;
        
        });
    }
}

