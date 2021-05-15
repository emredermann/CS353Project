 
import Chart from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/_services/register-service/register.service';

@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'business.component.html'
})

export class BusinessComponent{
  loginForm = new FormGroup({
    type : new FormControl('',Validators.required),
});
 
username : string;
password : string;
phone:number;
address : string;
restaurantName:string;
region :string;
submitted = false;
returnUrl: string;

constructor(private registerService:RegisterService,private router: Router){

}
ngOnInit() {
    
}
get f(){
    return this.loginForm.controls;
  }
onSubmit() {
    this.region = this.region.toLocaleUpperCase( );
    this.registerService.registerOwner(this.username,this.password,this.phone,this.restaurantName,this.region).pipe().subscribe(data => {  
        alert("Signup Successful!");
        alert("Your ID:"+ data);
        this.router.navigateByUrl('login');
     },error=>{
         alert("Invalid Values, Signup Unsuccessful!");
         
     });
   
}
getTitle(){
    return "Add Business Account";
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
getRestaurantName(e){
  this.restaurantName = e.target.value;
}
}


