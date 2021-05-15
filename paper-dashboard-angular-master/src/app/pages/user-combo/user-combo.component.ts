import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { restaurantOwner } from './../../_models/restaurantOwner';
import { Combo } from './../../_models/combo';
import {MatMenuModule} from '@angular/material/menu';


@Component({
    selector: 'user-combo-cmp',
    moduleId: module.id,
    templateUrl: 'user-combo.component.html'
})

export class UserComboComponent implements OnInit{

    public restaurantinfo: restaurantOwner = {name: "Ali Veli", restaurantName: "Burger King", id: 812,
                                            branch: "Bilkent",address: "ABC"};
    public restaurantinfo2: restaurantOwner = {name: "Ahmet Çelik", restaurantName: "Gülçimen Aspava", id: 813,
                                            branch: "Mustafa Kemal Mah.", address: "ABC"};
    private clicked = false;
    public restaurants : restaurantOwner [] = [this.restaurantinfo, this.restaurantinfo2 ];
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
