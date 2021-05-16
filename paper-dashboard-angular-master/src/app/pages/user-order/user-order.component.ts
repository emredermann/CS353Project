import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PersonalInfo } from '../../_models/PersonalInfo';
import { Restaurant } from './../../_models/restaurant';
import { MenuItem } from './../../_models/menuItem';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-order-cmp',
    moduleId: module.id,
    templateUrl: 'user-order.component.html'
})

export class UserOrderComponent implements OnInit {
    public info: PersonalInfo = {fullName: "Doğa Tansel", credits: 125.12, address: "Bilkent"};
    public restaurants: Restaurant[] = [
        {restaurant_id: 1, restaurant_owner: "Ali Veli", 
        restaurantname:'Burger King', owner_id: 1, 
        avg_rating: 3.5, region_name: "Bilkent", 
        menu: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}]},
        
        {restaurant_id: 2, restaurant_owner: "Ali Veli", 
        restaurantname:'Pizza Hut', owner_id: 2, 
        avg_rating: 3.9, region_name: "Çankaya", 
        menu: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}]} ,
        
        {restaurant_id: 3, restaurant_owner: "Hasan Abi", 
        restaurantname:'KFC', owner_id: 3, 
        avg_rating: 4.5, region_name: "Ümitköy", 
        menu: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}]} ,
        
        {restaurant_id: 4, restaurant_owner: "Halil Abi", 
        restaurantname:'Kardeşler Aspava', 
        owner_id: 4, avg_rating: 4.2, region_name: "Moda",
        menu: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}]} ,
        
        {restaurant_id: 5, restaurant_owner: "Ali Veli", 
        restaurantname:'Gülçimen Aspava', 
        owner_id: 5, avg_rating: 5.0, region_name: "Bilkent", 
        menu: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}]} ,
        
        {restaurant_id: 6, restaurant_owner: "Ali Veli", 
        restaurantname:'Şan İskender', owner_id: 6, 
        avg_rating: 3.5, region_name: "Bilkent", 
        menu: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}]}
    ];

    public restaurant: Restaurant = this.restaurants[0];
    public myMenu: MenuItem[] = this.restaurants[0].menu;
    public searchText: string;
    public closeResult = '';
    selectedSize:string;
    cart: any[];
    public options: string[] = ["something"];
 
    constructor(private modalService: NgbModal, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.restaurants.forEach((anItem: Restaurant) => {
              if (anItem.restaurant_id == params.id) {
                this.restaurant = anItem;
              }
            });
        });
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = ``;
          }, (reason) => {
            this.closeResult = ``;
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


    addToCart(v){
        alert("Your order has been added to cart.");
        
    }
    removeFromCart(v){
        alert("Item removed from cart.");
        
    }

    saveOrderAsCombo() {
     
        alert("Your customized order has been saved as a combo");

    }

    proceedToCheckout(){} //Saves all the changed attributes

    updatePage(){}
  
    refreshFilter(){
      //this.updatePage();
    }

    submitMenuFilter(){
      //this.counter = 0;
      //this.resultAssignment=this.assignments.filter(item=> item.RESTAURANT_NAME ===this.filteredRestaurantName);
        
    }
    changeMenuSelection(e){
      //this.filteredRestaurantName = e.target.value;
    }
}