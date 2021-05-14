import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


export class RestaurantInfo {
    ownerName: string;
    restaurantName: string;
    restaurantBranch: string;
    restaurantAddress: string;
}
export class Combo{
    comboName:string;
    itemlist:string[];
    price:  number;
}
@Component({
    selector: 'user-combo-cmp',
    moduleId: module.id,
    templateUrl: 'user-combo.component.html'
})

export class UserComboComponent implements OnInit{

    public restaurantinfo: RestaurantInfo = {ownerName: "Ali Veli", restaurantName: "Burger King", 
                                            restaurantBranch: "Bilkent", restaurantAddress: "ABC"};
    public restaurantinfo2: RestaurantInfo = {ownerName: "Ahmet Çelik", restaurantName: "Gülçimen Aspava", 
                                            restaurantBranch: "Mustafa Kemal Mah.", restaurantAddress: "ABC"};
    private clicked = false;
    public restaurants : RestaurantInfo [] = [this.restaurantinfo, this.restaurantinfo2 ];
    public chosenCombo : Combo = {comboName: "Fuzz", itemlist: ["burger","pizza"], price: 15};
    
    constructor(){
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
