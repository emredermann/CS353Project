import { restaurantOwner } from './../../_models/restaurantOwner';
import { MenuItem } from './../../_models/menuItem';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";

@Component({
    selector: 'owner-menu-editor-cmp',
    moduleId: module.id,
    templateUrl: 'owner-menu-editor.component.html'
})

export class OwnerMenuEditorComponent implements OnInit{

    public menu: MenuItem[] = [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                        {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}];

    public restaurantinfo: restaurantOwner = {name: "Ali Veli", restaurantName: "Burger King", 
                                                    id: 4,branch:"Bilkent" ,address: "ABC" };
    private clicked = false;
    public counter: number;
    public closeResult = '';
    public deleteQuestion = 'Are you sure you want to delete this item from your menu?';
    public deleteStatus = 'Are you sure you want to delete this item from your menu?';
    public newItemId = 0;

    constructor(private modalService: NgbModal, private router: Router){
        this.counter = 0;
    }

    ngOnInit(){}

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

    public gotoItemDetails(url, id) {
      var myurl = `${url}${id}`;
      this.router.navigateByUrl(myurl).then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
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
    getOwnerName(){
        return this.restaurantinfo.name;
    }

    getItemName(i){
        return this.menu[i].itemName;
    }

    getItemPrice(i){
        return this.menu[i].itemPrice;
    }

    setItemToBeDelete(i){
        this.counter=i;
    }

    deleteItem(){
        delete this.menu[this.counter];
        this.deleteStatus = 'Item has been deleted from the menu!';
    }

}
