import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface Orders {
    headerRow: string[];
    orderRows: string[][];
}

interface RestaurantInfo {
    ownerName: string;
    restaurantName: string;
    restaurantBranch: string;
    restaurantAddress: string;
}
interface Combo{
    comboName:string;
    itemlist:string[];
}
@Component({
    selector: 'user-combo-cmp',
    moduleId: module.id,
    templateUrl: 'user-combo.component.html'
})

export class UserComboComponent implements OnInit{
    public tableData1: Orders;
    public restaurantinfo: RestaurantInfo;
    private clicked = false;
    public restaurants : RestaurantInfo [];
    chosenCombo : Combo;

    
    constructor(){

        this.restaurantinfo.ownerName = "Ali Veli";
        this.restaurantinfo.restaurantName = "Burger King";
        this.restaurantinfo.restaurantBranch = "Bilkent Branch";
        this.restaurantinfo.restaurantAddress = "No. 31, Universiteler Mahallesi";
    }

    ngOnInit(){}    
  
     getRestaurantByName(s:string){
        this.restaurants.forEach(element => {
            if (element.restaurantName == s)
            return element;
        });
        return NONE_TYPE;
    }
    getSearchedRestaurantName(e){
        return e.target.value;
     }
     changeCombo(e){
            this.chosenCombo = e.target.value;
     }
     orderCombo(){
         alert(this.chosenCombo.comboName+"-->Ordered");
        return this.chosenCombo.comboName;
     }
     additem(e){
        this.chosenCombo.itemlist.push(e.target.value);
     }
}
