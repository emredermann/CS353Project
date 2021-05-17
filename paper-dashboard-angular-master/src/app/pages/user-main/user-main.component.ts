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
    public customer = [];
    public restaurants = [];
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
