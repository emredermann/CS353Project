import { COMBO_MENU } from './../../_models/combo_menu';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../../_models/restaurant';
import { MenuItem } from './../../_models/menuItem';
import { PersonalInfo } from './../../_models/PersonalInfo';
import { Combo } from './../../_models/combo';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'user-combo-cmp',
    moduleId: module.id,
    templateUrl: 'user-combo.component.html'
})


export class UserComboComponent implements OnInit{

    private clicked = false;
    public customer: PersonalInfo = {fullName: "Kemal Kılıçdaroğlu", credits: 120, address: "Bilkentte bir yerler" };
    public restaurants: Restaurant []; 

    public menu: Array<MenuItem> [];
    public selectedRestaurant:  Restaurant; 
    public searched_restaurant: string;
    public currentItem: MenuItem ;

    public newCombo :  Array<Combo> = [];
    public savedCombo: COMBO_MENU;
    
    public combos: Combo[] = [{combo_id: 1, comboName: "Fuzz", 
                                itemlist: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120},
                                
                                {combo_id: 2, comboName: "Hayvanatlık", itemlist:[{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120},
                                
                                {combo_id: 3, comboName: "Açım", itemlist: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120}];


                                            loginForm = new FormGroup({
                                              type : new FormControl('',Validators.required),
                                          });
    public closeResult = '';
    public addedCombo : Combo;
    public deletedCombo : Combo;
    constructor(private modalService: NgbModal, private route: ActivatedRoute){
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.combos.forEach((aCombo: Combo) => {
              if (aCombo.combo_id == params.id) {
                this.newCombo.push(aCombo);
              }
            });
        });
        
    
    } 

    addToCombo(v){
      this.newCombo.push(this.addedCombo);
    }

    removeFromCombo(){
        const index = this.newCombo.indexOf(this.deletedCombo, 0);
        if (index > -1) {
            this.newCombo.splice(index, 1);
        }
    this.updatePage();
        
      //  customerID;
    }
    itemToAddCart(name){
      this.addedCombo = name;
    }
    setItemDeleted(v){
      this.deletedCombo = v;
    }
    saveCombo(e){
      this.savedCombo = e;
      alert("Your customized order has been saved as a combo");
    }

    proceedToCheckout(){
      //Sent data to the db.
    }


    updatePage(){

    }

    refreshFilter(){
        this.searched_restaurant ="";
    }

    submitRestaurantFilter(){
        //this.counter = 0;
        //this.resultAssignment=this.assignments.filter(item=> item.RESTAURANT_NAME ===this.filteredRestaurantName);
        this.selectedRestaurant = this.restaurants.find(e => e.restaurantname === this.searched_restaurant);
        
    }
    addItemValue(e){

    }
 
    changeRestaurantSelection(e){
      this.searched_restaurant = e.target.value;
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
