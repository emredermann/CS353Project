import { restaurantOwner } from './../../_models/restaurantOwner';
import { MenuItem } from './../../_models/menuItem';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import {MatMenuModule} from '@angular/material/menu';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'owner-menu-item-editor-cmp',
    moduleId: module.id,
    templateUrl: 'owner-menu-item-editor.component.html'
})

export class OwnerMenuItemEditorComponent implements OnInit{
  public menu: MenuItem[] = [{itemId: 1, itemName: "Hamburger",  
                          itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                          {itemId: 2, itemName: "Cheeseburger", 
                          itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}];

  public item: MenuItem = this.menu[0];
  public newOption: string = "";
  public anIndex = 0;
  
  public options: string[] = this.item.itemOptions;

  public restaurantinfo: restaurantOwner = {name: "Ali Veli", restaurantName: "Burger King", 
                          id: 4,branch:"Bilkent", address: "ABC" };

  private clicked = false;
  public closeResult = '';

  constructor(private modalService: NgbModal, private route: ActivatedRoute){
      
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.menu.forEach((anItem: MenuItem) => {
        if (anItem.itemId == params.id) {
          this.item = anItem;
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

  setOption(e){
    this.newOption = e.target.value;
    this.item.itemOptions.push(this.newOption);
  }
  saveOption(){
    
    //DATABASE DEN OPTİONLARA EKLENECEK
  }

  saveChanges(){
      //DATABASE CONNECTION NEEDED
  }

  onRemoveOption(i){
    delete this.item.itemOptions[i];
  }


}
