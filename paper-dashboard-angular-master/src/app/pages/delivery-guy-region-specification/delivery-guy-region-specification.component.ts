import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';
import { DeliveryService } from 'app/_services/delivery-service/delivery.service';

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
    public regions = [];// : Array<string> = [];
    public delRegions = [];
    constructor(private deliveryService:DeliveryService,private authService :AuthenticationService){}
    public buttonCondcheck :boolean;
    public buttonCondNcheck :boolean;
    ngOnInit(){ //Database'den çekilecek kısım bu
        //this.regions = ["beytepe","bilkent","cankaya","kızılcahamam","karsıyaka",]
        this.updatePage();
        this.buttonCondcheck = false;
        this.buttonCondNcheck = false;
    }   

    updatePage(){
        let id = this.authService.getCurrentUserId(); 
        this.deliveryService.getRegions().pipe().subscribe(data => {  
            
            this.regions = data;
            
         });

         this.deliveryService.getUserRegion(id).subscribe(data => {  
          
            this.delRegions = data;
            
         });

    }
    check(region){
        let id = this.authService.getCurrentUserId(); 
        let test = this.delRegions.filter((item)=>item.DELIVERY_GUY_ID ==id); ////
        this.buttonCondcheck = true;
        return (test.findIndex(region) != -1);
    }
    checkN(region){
        let id = this.authService.getCurrentUserId(); 
        let test = this.delRegions.filter((item)=>item.DELIVERY_GUY_ID ==id);////
        this.buttonCondNcheck = true;
        return (test.findIndex(region) == -1);
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
    regionAdd(e,region){
        let id =this.authService.getCurrentUserId();
        this.deliveryService.postRegion({region,id});

        this.updatePage();
        const index = this.selectedRegion.indexOf(e.target.value, 0);
        if (index < 0) {
            this.selectedRegion.push( e.target.value);
        }
    }
    regionRemove(e,region){

        let id =this.authService.getCurrentUserId();
        this.deliveryService.removeRegion(id,region);

        this.updatePage();
        const index = this.selectedRegion.indexOf(e.target.value, 0);
        if (index > -1) {
            this.selectedRegion.splice(index, 1);
        }
    }
    actionMethod() {
        //console.log("Delivery-guy has been requested!");
  }

  
}
