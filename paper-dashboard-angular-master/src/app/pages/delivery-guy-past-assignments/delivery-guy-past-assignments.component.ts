import { userOrder } from './../../_models/userOrder';
import { deliveryGuy } from './../../_models/deliveryGuy';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrderService } from 'app/_services/order-service/order.service';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
//type NewType = NgbModal;

@Component({
    selector: 'delivery-guy-past-assignments-cmp',
    moduleId: module.id,
    templateUrl: 'delivery-guy-past-assignments.component.html'
})

export class DeliveryGuyPastAssignmentsComponent implements OnInit{
    public delGuyInfo: deliveryGuy = {deliveryGuyName: "İhsan Vekil", job: "Delivery Guy", rating: 3.5, joinedOn: "4.3.2020" ,status:"pending"};
    public searchText: string;
    public title = 'Past Delivery Assignments';
    public closeResult = '';
    public orderDetail = [];
    public assignments = []; /*: userOrder[]= [{
    
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
    ];*/
    
    constructor( private formBuilder: FormBuilder,private orderService:OrderService, 
        private authService:AuthenticationService,private modalService: NgbModal){}
    ngOnInit(){ //Database'den çekilecek kısım bu
        this.updatePage();
    }

    updatePage(){
        let id = this.authService.getCurrentUserId();
        
        this.orderService.getOldDeliveryOrders(id).pipe().subscribe(data => {  
            
            this.assignments = data;
            
         });
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
  getOrderDetails(order_no:number){
    let id_user = this.authService.getCurrentUserId();
    this.orderService.getOrderDetails(order_no,id_user).pipe().subscribe(data => {  
        
        this.orderDetail = data;
    
    });
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
}
