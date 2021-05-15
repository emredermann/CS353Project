import { userOrder } from './../../_models/userOrder';
import { deliveryGuy } from './../../_models/deliveryGuy';
import { Component, OnInit } from '@angular/core';
import { AssignmentExpression, updatePropertyAssignment } from 'typescript';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'app/_services/order-service/order.service';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'delivery-guy-new-assignments-cmp',
    moduleId: module.id,
    templateUrl: 'delivery-guy-new-assignments.component.html'
})

export class DeliveryGuyNewAssignmentsComponent implements OnInit{
    
    loginForm = new FormGroup({
        type : new FormControl('',Validators.required),
    });

    constructor( private formBuilder: FormBuilder,private orderService:OrderService, 
        private authService:AuthenticationService,private modalService: NgbModal){}


    public delGuyInfo: deliveryGuy = {deliveryGuyName: "İhsan Vekil", job: "Delivery Guy", rating: 3.5, joinedOn: "4.3.2020", status :"available"};
    public searchText: string;
    public title = 'New Delivery Assignments';
    public region: string [] = ["cankaya", "beytepe", "bilkent", "çayyolu", "adapazarı"];
    public clicked: boolean;
    public selectedRegion: string ;
    public filteredRestaurantName:string;
    public filteredAssignmentCount:number;
    public counter:number;
    public currentAssignment: number;
    public searchBox= false;
    public closeResult = '';
    //There will be one assignment
    public assignments = [];/*: userOrder []=[{ customerName: "Dr.Who", idNo:1,
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
        orderState: "pending"},];*/

       public filteredAssignment = [];
       public resultAssignment = [];
       //public list = [];

    ngOnInit(){ //Database'den çekilecek kısım bu
        this.updatePage();
        //this.resultAssignment = this.assignments;
    }
    updatePage(){
        let id = this.authService.getCurrentUserId();
        
        this.orderService.getNewDeliveryOrders(id).pipe().subscribe(data => {  
            console.log(data);
            this.assignments = data;
            
         });
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
    refreshFilter(){
        this.updatePage();
    }

    submitRestaurantFilter(){
        this.counter = 0;
        /*
        for (var val of this.assignments) {
            if(this.filteredRestaurantName === val.restaurantName){
                alert(val.restaurantName);
                
                for (let index = 1; index < 12; index++) {
                   this.filteredAssignment[index].customerName=val.customerName
                   this.filteredAssignment[index].date = val.date;
                   this.filteredAssignment[index].delGuyRating = val.delGuyRating;
                   this.filteredAssignment[index].delGuyReview = val.delGuyReview;
                   this.filteredAssignment[index].idNo = val.idNo;
                   this.filteredAssignment[index].items = val.items;
                   this.filteredAssignment[index].orderState = val.orderState;
                   this.filteredAssignment[index].price = val.price;
                   this.filteredAssignment[index].restaurantName = val.restaurantName;
                   this.filteredAssignment[index].restaurantRating = val.restaurantRating;
                   this.filteredAssignment[index].restaurantResponse = val.restaurantResponse;
                   this.filteredAssignment[index].restaurantReview = val.restaurantReview;
                }
                 this.counter = this.counter+ 1;
            }
          }*/
          
          this.resultAssignment=this.assignments.filter(item=> item.RESTAURANT_NAME ===this.filteredRestaurantName);
          
    }
    changeRestaurantSelection(e){
            this.filteredRestaurantName = e.target.value;
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
  getOrderDetails(order_no:number){
      
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
