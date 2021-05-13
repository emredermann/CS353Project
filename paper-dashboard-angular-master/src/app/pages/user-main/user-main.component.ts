import { Component, OnInit } from '@angular/core';

interface PersonalInfo {
    fullName: string;
    credits: number;
    address: string;
}

@Component({
    selector: 'user-main-cmp',
    moduleId: module.id,
    templateUrl: 'user-main.component.html'
})

export class UserMainComponent implements OnInit{
    public title = 'List of Restaurants';
    public searchText: string;
    public info: PersonalInfo;

    restaurants = [
        {name:'Burger King',  availability:'Open', type:'Burgers', avgDelTime: '30-40 min', minPrice:'$15'} ,
        {name:'Pizza Hut',  availability:'Closed', type:'Pizza', avgDelTime: '20-30 min', minPrice:'$20'} ,
        {name:'KFC',  availability:'Open', type:'Fried Chicken', avgDelTime: '40-50 min', minPrice:'$18'} ,
        {name:'Kardeşler Aspava',  availability:'Open', type:'Kebap', avgDelTime: '45-55 min', minPrice:'$30'} ,
        {name:'Gülçimen Aspava',  availability:'Open', type:'Kebap', avgDelTime: '45-55 min', minPrice:'$30'} ,
        {name:'Şan İskender',  availability:'Closed', type:'İskender Kebap', avgDelTime: '30-40 min', minPrice:'$25'}
    ];

    constructor(){
        this.info.fullName = "Ali Veli";
        this.info.credits = 120.90;
        this.info.address = "Merkez Kampüs Lojmanlar, 24/5, Bilkent, Çankaya";
    }

    ngOnInit(){ //Database'den çekilecek kısım bu
        
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

    getCustomerName(){
        return this.info.fullName;
    }
    getCredits(){
        return this.info.credits;
    }
    getAddress(){
        return this.info.address;
    }
}
