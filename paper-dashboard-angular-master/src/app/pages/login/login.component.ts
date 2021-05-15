import { NONE_TYPE } from '@angular/compiler';
import { AlertService,AccountService } from '../../_services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { event } from 'jquery';
import { User } from 'app/_models';
import { AuthenticationService } from 'app/_services/authentication-service/authentication.service';




@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent{


    loginForm = new FormGroup({
        type : new FormControl('',Validators.required),
    });

    public value : string;
    public username : number;
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

    constructor( private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { 
          if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }}
    

    ngOnInit() {
        this.authenticationService.getAll();
        this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
    
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    
    get f(){
        return this.loginForm.controls;
    }
      
    onSubmit() {
        
        //this.login();
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            
            //return;
        }
    
        this.loading = true;
        
        this.authenticationService.login(this.username, this.password,this.loginType)  
            .subscribe(data => {
                  
                    let curUser = this.authenticationService.getCurrentUser();
                    
                    if(this.loginType == 1){
                        this.router.navigateByUrl('user');
                    }
                    if(this.loginType == 2){
                        this.router.navigateByUrl('delivery');
                    }
                    if(this.loginType == 3){
                        this.router.navigateByUrl('owner');
                    }
                },
                error => {
                    //this.error = error;
                    alert(error);
                    this.loading = false;
                });
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


