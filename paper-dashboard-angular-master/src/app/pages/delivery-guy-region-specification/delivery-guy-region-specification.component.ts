import { Component, OnInit } from '@angular/core';

interface DeliveryGuyInfo {
    deliveryGuyName: string;
    job: string;
    rating: number;
    joinedOn: string;
}

@Component({
    selector: 'delivery-guy-region-specification-cmp',
    moduleId: module.id,
    templateUrl: 'delivery-guy-region-specification.component.html'
})

export class DeliveryGuyRegionSpecificationComponent implements OnInit{
    
    public delGuyInfo: DeliveryGuyInfo = {deliveryGuyName: "İhsan Vekil", job: "Delivery Guy", rating: 3.5, joinedOn: "4.3.2020"};
    private clicked = false;
    public searchText: string;
    public title = 'Past Delivery Assignments';
    public selectedRegion:Array<string> = [];
    public regions  : Array<string> = [];
    
    ngOnInit(){ //Database'den çekilecek kısım bu
        this.regions = ["beytepe","bilkent","cankaya","kızılcahamam","karsıyaka",]
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
    regionAdd(e){
        const index = this.selectedRegion.indexOf(e.target.value, 0);
        if (index < 0) {
            this.selectedRegion.push( e.target.value);
        }
    }
    regionRemove(e){
        const index = this.selectedRegion.indexOf(e.target.value, 0);
        if (index > -1) {
            this.selectedRegion.splice(index, 1);
        }
    }
    actionMethod() {
        console.log("Delivery-guy has been requested!");
  }

  
}
