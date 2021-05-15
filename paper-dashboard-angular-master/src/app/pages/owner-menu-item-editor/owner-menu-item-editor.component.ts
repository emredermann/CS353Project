import { restaurantOwner } from './../../_models/restaurantOwner';
import { MenuItem } from './../../_models/menuItem';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'owner-menu-item-editor-cmp',
    moduleId: module.id,
    templateUrl: 'owner-menu-item-editor.component.html'
})

export class OwnerMenuItemEditorComponent implements OnInit{
    public item: MenuItem = {itemName: "Hamburger", itemIngredients: ["Bread","Meat", "Salad","Tomato","Ketchup","Pickles"], 
                            itemSizes: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14};
    
    public ingredients: string[] = this.item.itemIngredients;
    public sizes: string[] = this.item.itemSizes;

    public restaurantinfo: restaurantOwner = {name: "Ali Veli", restaurantName: "Burger King", 
                            id: 4,branch:"Bilkent", address: "ABC" };

    private clicked = false;
    public closeResult = '';

    constructor(private modalService: NgbModal){
        
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

    ngOnInit(){}

    getRestaurantName(){
        return this.restaurantinfo.restaurantName;
    }
    getBranch(){
        return this.restaurantinfo.branch;
    }
    getAddress(){
        return this.restaurantinfo.address;
    }
    getOwnerName(){
        return this.restaurantinfo.name;
    }

    getItemName(){
        return this.item.itemName;
    }

    getItemPrice(){
        return this.item.itemPrice;
    }

    saveIngredient(){

    }

    saveSize(){}

    saveChanges(){}

    onRemoveSize(e){

    }

    onRemoveIngredient(e){

    }
 
}
