import { AlertService,AccountService } from '../../_services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { event } from 'jquery';

@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent{

    loginForm = new FormGroup({
        type : new FormControl('',Validators.required),
    });
    value : string;
    username : string;
    password : string;
    loading = false;
    submitted = false;
    returnUrl: string;

    ngOnInit() {
        
    }
    get f(){
        return this.loginForm.controls;
      }
    onSubmit() {
       alert(this.username+  " has been clicked with password " + this.password + " as "+ this.value);
    }
    changeType(e){
        this.value = e.target.value;
    }
    changeUsername(e){
        this.username = e.target.value;
    }
    changePassword(e){
        this.password = e.target.value;
    }
}


