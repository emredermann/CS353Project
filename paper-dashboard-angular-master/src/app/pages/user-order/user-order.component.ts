import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PersonalInfo } from '../../_models/PersonalInfo';
import { Restaurant } from './../../_models/restaurant';
import { MenuItem } from './../../_models/menuItem';
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from 'app/_services/restaurant-service/restaurant.service';
import { identifierModuleUrl } from '@angular/compiler';
import { OrderService } from 'app/_services/order-service/order.service';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';

@Component({
    selector: 'user-order-cmp',
    moduleId: module.id,
    templateUrl: 'user-order.component.html'
})
/*class MENU_ITEM {
    FOOD_ID: number;
    FOODNAME: string;
    PRICE: number;
    RESTAURANT_ID:number;
    ISAVAILABLE:boolean;
}

class HAS_ITEM {
    FOOD_ID: number;
    ORDER_NO:number;
}*/

export class UserOrderComponent implements OnInit {
    public info: PersonalInfo = {fullName: "Doğa Tansel", credits: 125.12, address: "Bilkent"};
    public restaurants= [] ;

    public restaurant: Restaurant = {restaurant_id: 0,
        restaurant_owner: "",
        restaurantname: "",
        owner_id: 0,
        avg_rating: 0,
        region_name: "",
        menu: []};
    public myMenu: MenuItem[] = [];
    public searchText: string;
    public closeResult = '';
    selectedSize:string;
    public deletedItem : MenuItem;
    public cart: Array<MenuItem> = [];
    public addedItem : MenuItem;
    public options: string[] = ["something"];
    public rest_id:number;
    public menu = [];
    constructor(private modalService: NgbModal, private route: ActivatedRoute, private restService:RestaurantService,
        private orderService:OrderService, private authService:AuthenticationService ) {}
    //public list:MENU_ITEM[];
    ngOnInit() {
        
        this.route.params.subscribe(params => {
           this.rest_id= params.id;
           this.restService.setRestID(this.rest_id);
           console.log(this.rest_id);
            this.restaurants.forEach((anItem: Restaurant) => {
              if (anItem.restaurant_id == params.id) {
                this.restaurant = anItem;
              }
            });
        });
        this.updatePage();
    }

   getItemOptions(id){
        this.orderService.getItemOptions(id).pipe().subscribe(data => {  
            this.options = data;
            
         });
   }

    open(content,foodid) {
        this.getItemOptions(foodid);
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
        //this.orderService.createOrder(this.list);
        this.cart.push(this.addedItem);
    }
    removeFromCart(){
        const index = this.cart.indexOf(this.deletedItem, 0);
        if (index > -1) {
            this.cart.splice(index, 1);
        }
        this.updatePage();
    }
    itemToAddCart(name){
        this.addedItem = name;
    }
    setItemDeleted(v){
        this.deletedItem = v;
    }
    saveOrderAsCombo() {
        this.cart;                  // ---> send it to the db as combo
      
    }

    proceedToCheckout(){} //Saves all the changed attributes

    updatePage(){
        this.restService.getRestaurantMenu(this.rest_id).pipe().subscribe(data => {  
            this.menu = data;
        });

        this.restService.getRestaurants().pipe().subscribe(data => {  
            this.restaurants = data;
            this.restaurants = this.restaurants.filter((item)=>item.RESTAURANT_ID = this.rest_id);
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
}