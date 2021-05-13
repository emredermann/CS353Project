import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { isTemplateExpression } from 'typescript';

interface RestaurantInfo {
    restaurantName: string;
    restaurantBranch: string;
    restaurantAddress: string;
}

interface PersonalInfo {
    fullName: string;
    credits: number;
}

@Component({
    selector: 'user-order-cmp',
    moduleId: module.id,
    templateUrl: 'user-order.component.html'
})

export class UserOrderComponent implements OnInit {
    public personInfo: PersonalInfo;
    public restaurantInfo: RestaurantInfo;
    public searchText: string;
    public closeResult = '';
    selectedSize:string;
    cart: any[];
  //  combo:cart[];
    menu = [
        {itemName:'Hamburger', price:'$15'} ,
        {itemName:'Cheeseburger', price:'$20'} ,
        {itemName:'Egg Burger', price:'$18'} ,
        {itemName:'Seattle Burger', price:'$30'} 
    ];

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
    }

    getRestaurantName(){
        return 'Order from ' + this.restaurantInfo.restaurantName;
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


    addToCart(v){
        alert("Your order has been added to cart.");
        this.cart.push(v)
    }

    saveOrderAsCombo() {
     //   this.saveOrderAsCombo.push(this.cart);
     //Clears the current cart.
        this.cart = [] ;
        alert("Your customized order has been saved as a combo");

    }
    proceedToCheckout(){
    }
    cancelFinishOrder(){
    }
}