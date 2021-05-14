import { NONE_TYPE } from '@angular/compiler';
import { AlertService,AccountService } from '../../_services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { event } from 'jquery';
import { User } from 'app/_models';




@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent{

/*
    loginForm = new FormGroup({
        type : new FormControl('',Validators.required),
    });
*/
    public value : string;
    public username : string;
    public password : string;
    public loading = false;
    public submitted = false;
    public returnUrl: string;
    public user: User[] = [];

    /*
    1 --> user
    2 --> delivery
    3 --> owner
    */
   
    loginType:number;

    constructor(private route: ActivatedRoute, private router: Router){
        
    }
    

    ngOnInit() {

    }
    /*
    get f(){
        return this.loginForm.controls;
      }
      */
    onSubmit() {
        alert(this.username+  " has been clicked with password " + this.password + " as "+ this.value);
        this.login();
    }


    changeType(e){
        alert("anan" + e.target.value);
        if(e.target.value == 'user')
            this.loginType = 1;
        if(e.target.value == 'delivery')
            this.loginType = 2;
        if(e.target.value == 'owner')
            this.loginType = 3;    
        this.value = e.target.value;
    }
    changeUsername(e){
        this.username = e.target.value;
    }
    changePassword(e){
        this.password = e.target.value;
    }
    login(){
        /*
            
        */
       alert(this.value+" going to enter ");
       // User table
       if(this.loginType == 1){
            this.router.navigateByUrl('user');

            //return NONE_TYPE;
    }
    // delivery table
    if(this.loginType == 2){
        this.router.navigateByUrl('delivery');


        //return NONE_TYPE;
    }
    // owner table
    if(this.loginType == 3){
        this.router.navigateByUrl('owner');
        
        //return NONE_TYPE;
    }
}
}


