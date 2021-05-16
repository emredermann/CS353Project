import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../../_models/restaurant';
import { MenuItem } from './../../_models/menuItem';
import { PersonalInfo } from './../../_models/PersonalInfo';
import { Combo } from './../../_models/combo';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-combo-cmp',
    moduleId: module.id,
    templateUrl: 'user-combo.component.html'
})


export class UserComboComponent implements OnInit{

    private clicked = false;
    public customer: PersonalInfo = {fullName: "Kemal Kılıçdaroğlu", credits: 120, address: "Bilkentte bir yerler" };
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

    public menu: MenuItem [] = this.restaurants[0].menu;
    public restaurant: Restaurant = this.restaurants[0];
    public currentItem: MenuItem = {itemId: this.menu[0].itemId,
        itemName: this.menu[0].itemName,
        itemOptions: this.menu[0].itemOptions,
        itemPrice: this.menu[0].itemPrice};

    public newCombo : Combo = {combo_id: 1, comboName: "Fuzz", itemlist: this.restaurants[0].menu, price: 15};
    public combo: MenuItem[] = this.restaurants[0].menu;
    
    public combos: Combo[] = [{combo_id: 1, comboName: "Fuzz", 
                                itemlist: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120},
                                
                                {combo_id: 2, comboName: "Hayvanatlık", itemlist:[{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120},
                                
                                {combo_id: 3, comboName: "Açım", itemlist: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120}];

    public options: string[] = ["something"];
    public closeResult = '';
    
    constructor(private modalService: NgbModal, private route: ActivatedRoute){
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.combos.forEach((aCombo: Combo) => {
              if (aCombo.combo_id == params.id) {
                this.newCombo = aCombo;
              }
            });
        });
    } 

    addToCombo(v){

    }

    removeFromCombo(v){

    }

    saveCombo(e){

    }

    proceedToCheckout(e){

    }


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
