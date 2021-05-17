import { Component, OnInit } from '@angular/core';
import { restaurantOwner } from './../../_models/restaurantOwner';
import { PersonalInfo } from '../../_models/PersonalInfo';
import { Restaurant } from './../../_models/restaurant';
import { MenuItem } from './../../_models/menuItem';
import { Router } from "@angular/router";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'app/_services/customer-service/customer.service';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';
import { RestaurantService } from 'app/_services/restaurant-service/restaurant.service';

@Component({
    selector: 'user-main-cmp',
    moduleId: module.id,
    templateUrl: 'user-main.component.html'
})

export class UserMainComponent implements OnInit{
    public title = 'List of Restaurants';
    public searchText: string;
    public customer = [];//: PersonalInfo = {fullName: "Doğa Tansel", credits: 125.12, address: "Bilkent"};
    public restaurants = []/*: Restaurant[] = [
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
    ];*/

    public closeResult = '';

    constructor(private modalService: NgbModal, private router: Router,private customerService: CustomerService,
          private authService:AuthenticationService, private restService:RestaurantService){
    }

    ngOnInit(){ //Database'den çekilecek kısım bu
      this.updatePage();
    }
    // Search text datasını alıyor.
    getCity(e){
        this.searchText = e.target.value;
    }
    proceedToCheckout(){
        
    }
    addToCart(){

    }
    saveOrderAsCombo(){

    }
    cancelFinishOrder(){

    }


    public gotoRestaurantDetails(url, id) {
        var myurl = `${url}${id}`;
        this.router.navigateByUrl(myurl).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
    }

    updatePage(){
        let id = this.authService.getCurrentUserId();
        this.customerService.getUser(id).pipe().subscribe(data => {  
        this.customer = data;
        
       });
       this.restService.getRestaurants().pipe().subscribe(data => {  
        this.restaurants = data;
        
       });
    }
  
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

}
