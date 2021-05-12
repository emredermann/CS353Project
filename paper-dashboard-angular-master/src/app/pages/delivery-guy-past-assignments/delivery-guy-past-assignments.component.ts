import { Component, OnInit } from '@angular/core';

interface DeliveryGuyInfo {
    deliveryGuyName: string;
    job: "Delivery Guy";
    rating: number;
    joinedOn: string;
}

@Component({
    selector: 'delivery-guy-past-assignments-cmp',
    moduleId: module.id,
    templateUrl: 'delivery-guy-past-assignments.component.html'
})

export class DeliveryGuyPastAssignmentsComponent implements OnInit{
    public delGuyInfo: DeliveryGuyInfo;
    private clicked = false;
    public searchText: string;
    public title = 'Past Delivery Assignments';

    constructor(){
        this.delGuyInfo.deliveryGuyName = "İhsan Vekil";
        this.delGuyInfo.rating = 3.2;
        this.delGuyInfo.joinedOn = "4.3.2020";
    }

    assignments = [
        {customerName:'Ahmet Mehmet',  
            orderDetails:['Quarterpounder Hamburger with fries', 'Coke Zero (35 mL)', 'Total: $35'], 
            deliveryStatus:'Delivered', serviceRating: '4.5'} ,
        {customerName:'Ali Veli',  
            orderDetails:['2 Large Margaritas', 'California Rolls (8x)','Coke Zero (1L)', 'Total: $59.98'], 
            deliveryStatus:'Delivery Request Denied', serviceRating: 'none'} ,
        {customerName:'Hakan Şükür',  
            orderDetails:['2 Large Margaritas', '2 Small Margaritas', 'Coke Zero (35 mL)', 'Total: $65'], 
            deliveryStatus:'Delivery cancelled by customer', serviceRating: 'none'} ,
        {customerName:'Mehmet Erbakan',  
            orderDetails:['Quarterpounder Cheeseburger with fries', 'Coke Zero (35 mL)', 'Total: $35'], 
            deliveryStatus:'Delivered', serviceRating: '2.5'} ,
    ];

    ngOnInit(){ //Database'den çekilecek kısım bu
        
    }

    getName(){
        return this.delGuyInfo.deliveryGuyName;
    }
    getJob(){
        return this.delGuyInfo.job;
    }
    getRating(){
        return this.delGuyInfo.rating;
    }
    getJoinDate(){
        return this.delGuyInfo.joinedOn;
    }

    actionMethod() {
        console.log("Delivery-guy has been requested!");
  }
}
