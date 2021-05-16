//import { User } from 'app/models/user';
class User{
    USER_ID: number;
    USERNAME: string;
    PASSWORD: string;
    token?: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private cur_id: number;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: number, password: string, type:number) {
        
       if(type == 1){
        return this.http.post<any>(`${environment.apiUrl}/user/authenticate`, { 'username': username, 'password':password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            
            
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.cur_id = user[0].USER_ID;
            return user;
        }));
    
       }
       else if (type == 2){
        return this.http.post<any>(`${environment.apiUrl}/delivery/authenticate`, { 'username': username, 'password':password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.cur_id = user[0].USER_ID;
           
            return user;
        }));
       }
       else if(type == 3){
        return this.http.post<any>(`${environment.apiUrl}/owner/authenticate`, { 'username': username, 'password':password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            
            
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.cur_id = user[0].USER_ID;
            return user;
        }));
       }
       else{
           throw "Error";
       }
        
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.cur_id = 0;
    }
    getCurrentUser(){
        let user:User = JSON.parse(localStorage.getItem('currentUser'));
        return user ;
        
    }
    getCurrentUserId(){
        return this.cur_id;
    }
    getAll(){
        
        const url = `${environment.apiUrl}/`;
        this.http.get(url);
    }
}