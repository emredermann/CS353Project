import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/_services/register-service/register.service';

@Component({
    selector: 'deliver-cmp',
    moduleId: module.id,
    templateUrl: 'deliver.component.html'
})

export class DeliverComponent implements OnInit{
   
    
    username : string;
    password : string;
    phone:number;
    address : string;
    region :string;
    submitted = false;
    returnUrl: string;

    constructor(private registerService:RegisterService,private router: Router){

    }
    ngOnInit() {
        
    }
   
    onSubmit() {
        
        this.registerService.registerDelivery(this.username,this.password,this.phone).pipe().subscribe(data => {  
        alert("Signup Successful!");
        alert("Your ID:"+ data);
        this.router.navigateByUrl('login');
        },error=>{
            alert("Invalid Values, Signup Unsuccessful!");
         
        });
       
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


