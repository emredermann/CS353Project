import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from './../../_models/menuItem';
import { PersonalInfo } from './../../_models/PersonalInfo';
import { Combo } from './../../_models/combo';
import { Router } from "@angular/router";
import { OrderService } from 'app/_services/order-service/order.service';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';
import { RestaurantService } from 'app/_services/restaurant-service/restaurant.service';
import { updatePropertyAssignment } from 'typescript';

@Component({
    selector: 'user-combo-order-cmp',
    moduleId: module.id,
    templateUrl: 'user-combo-order.component.html'
})

export class UserComboOrderComponent implements OnInit { 

    public closeResult = '';
    public customer: PersonalInfo = {fullName: "Kemal Kılıçdaroğlu", credits: 120, address: "Bilkentte bir yerler" };
    public combos = [];/*: Combo[] = [{combo_id: 1, comboName: "Fuzz", 
                                itemlist: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120},
                                
                                {combo_id: 2, comboName: "Hayvanatlık", itemlist:[{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120},
                                
                                {combo_id: 3, comboName: "Açım", itemlist: [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                                            {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}], price: 120}];

    public currentCombo: Combo = this.combos[0];
    public menu: MenuItem[] = this.currentCombo.itemlist;
    public newComboId = 0;*/

    constructor(private modalService: NgbModal, private router: Router,private restService:RestaurantService,
      private orderService:OrderService, private authService:AuthenticationService ){
    }

    ngOnInit() {
      this.updatePage();
    }
    updatePage(){
        let id = this.authService.getCurrentUserId();
        this.orderService.getUserCombos(id).pipe().subscribe(data => {  
          this.combos = data;
          
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

    public gotoComboDetails(url, id) {
        var myurl = `${url}${id}`;
        this.router.navigateByUrl(myurl).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }

    removeCombo(e,comb){
        this.orderService.removeCombo(comb).pipe().subscribe(data => {  
         
          
       });
    }

    proceedToCheckout(e){

    }
}