 
import Chart from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
  
 
username : string;
password : string;
phone:string;
address : string;
region :string;
submitted = false;
returnUrl: string;

ngOnInit() {
    
}

onSubmit() {
   alert(this.username+"\n"+this.password+"\n"+this.phone+"\n"+this.address+"\n"+this.region);
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
getRegion(e){
    this.region = e.target.value;
}
}


