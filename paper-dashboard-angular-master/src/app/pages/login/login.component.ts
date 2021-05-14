import { NONE_TYPE } from '@angular/compiler';
import { AlertService,AccountService } from '../../_services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { event } from 'jquery';


interface User{
    username : string;
    password : string;
}

@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent{
    private route: ActivatedRoute;
    private router: Router;

    loginForm = new FormGroup({
        type : new FormControl('',Validators.required),
    });
    value : string;
    username : string;
    password : string;
    loading = false;
    submitted = false;
    returnUrl: string;
    user: User[];

    /*
    1 --> user
    2 --> delivery
    3 --> owner
    */
   
    loginType:number;

    ngOnInit() {
        
    }
    get f(){
        return this.loginForm.controls;
      }
    onSubmit() {
        alert(this.username+  " has been clicked with password " + this.password + " as "+ this.value);
        this.login();
    }


    changeType(e){
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
            for(let i = 0; i < this.user.length;i++){
                if(this.username == this.user[i].username && this.password == this.user[i].password)
                {   
                    this.router.navigateByUrl('user');
                    //return this.user;
                }
        }
            return NONE_TYPE;
    }
    // delivery table
    if(this.loginType == 2){
        for(let i = 0; i < this.user.length;i++){
            if(this.username == this.user[i].username && this.password == this.user[i].password)
            {
                this.router.navigateByUrl('deliver');
                //return this.user;
            }
    }
        return NONE_TYPE;
    }
    // owner table
    if(this.loginType == 3){
        for(let i = 0; i < this.user.length;i++){
            if(this.username == this.user[i].username && this.password == this.user[i].password)
            {
                this.router.navigateByUrl('owner');
                //return this.user;
            }
    }
        return NONE_TYPE;
    }
}
}


