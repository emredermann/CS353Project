import { restaurantOwner } from './../../_models/restaurantOwner';
import { MenuItem } from './../../_models/menuItem';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { Restaurant } from 'app/_models/restaurant';
import { RestaurantService } from 'app/_services/restaurant-service/restaurant.service';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';

@Component({
    selector: 'owner-restaurant-editor-cmp',
    moduleId: module.id,
    templateUrl: 'owner-restaurant-editor.component.html'
})

export class OwnerRestaurantEditorComponent implements OnInit{

    public menu: MenuItem[] = [{itemId: 1, itemName: "Hamburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 14},
                        {itemId: 2, itemName: "Cheeseburger", itemOptions: ["Small (90 g.)","Medium (120 g.)", "Large (180 g.)", "King (220 g.)"], itemPrice: 19}];

    public restaurantinfo: restaurantOwner = {name: "Ali Veli", restaurantName: "Burger King", 
                                                    id: 4,branch:"Bilkent" ,address: "ABC" };
    public restaurants = [];/*: Restaurant[] = [{restaurant_id: 1,
        restaurant_owner: "Ali Veli",
        restaurantname: "Burger King",
        owner_id: 1,
        avg_rating: 3.5,
        region_name: "Bilkent",
        menu: this.menu},

        {restaurant_id: 2,
        restaurant_owner: "Ali Veli",
        restaurantname: "Pizza Hut",
        owner_id: 2,
        avg_rating: 3.5,
        region_name: "Çankaya",
        menu: this.menu} ];*/

    private clicked = false;
    public counter: number;
    public closeResult = '';
    public deleteQuestion = 'Are you sure you want to remove this restaurant branch from your list of currently owned restaurants?';
    public deleteStatus = 'Are you sure you want to remove this restaurant branch from your list of currently owned restaurants?';
    public newRestaurantId = 0;

    constructor(private modalService: NgbModal, private router: Router,private restService:RestaurantService,
                      private authService:AuthenticationService){
        this.counter = 0;
    }

    ngOnInit(){this.updatePage();}

    updatePage(){
      let id = this.authService.getCurrentUserId();
      //alert(id);
      
      this.restService.getOwnerRestaurants(id).pipe().subscribe(data => {  
          
          this.restaurants = data;
          
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
/*
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


    getBranchName(i){
        return this.restaurants[i].restaurantname;
    }

    getItemPrice(i){
        return this.menu[i].itemPrice;
    }
*/
    setBranchToBeDeleted(i){
        this.counter=i;
    }

    deleteBranch(){
        delete this.restaurants[this.counter];
        this.deleteStatus = 'This branch has been removed from you current list of owned restaurants!';
    }

}
