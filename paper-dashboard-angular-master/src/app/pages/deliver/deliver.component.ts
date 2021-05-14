import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'deliver-cmp',
    moduleId: module.id,
    templateUrl: 'deliver.component.html'
})

export class DeliverComponent implements OnInit{
   
    
    username : string;
    password : string;
    phone:string;
    address : string;
    city :string;e
    submitted = false;
    returnUrl: string;

    ngOnInit() {
        
    }
   
    onSubmit() {
       alert(this.username+"\n"+this.password+"\n"+this.phone+"\n"+this.address+"\n"+this.city);
    }
    getPassword(e){
        this.password = e.target.value;
    }
    getUsername(e){
        this.username = e.target.value;
    }
    getPhone(e){
        this.phone = e.target.value;
    }
    getAddress(e){
        this.address = e.target.value;
    }
    getCity(e){
        this.city = e.target.value;
    }
}


