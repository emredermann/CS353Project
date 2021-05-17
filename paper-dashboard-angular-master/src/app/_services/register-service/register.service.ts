import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from 'app/_models/restaurant';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  
  registerCustomer( username:string, password:string,phone:number,address:string,region:string){
    return this.http.put<any>(`${environment.apiUrl}/user/register`, { 'Ausername': username, 'Apassword':password,
                                                            'Aphone':phone,'Aaddress': address, 'Aregion' : region})
    .pipe(map(user => {
       
        
        return user;
    }));
  }

  registerOwner(username:string, password:string,phone:number,restName:string,region:string){
    return this.http.put<any>(`${environment.apiUrl}/owner/register`, { 'Ausername': username, 'Apassword':password,
    'Aphone':phone,'Arestname': restName, 'Aregion' : region})
    .pipe(map(user => {


    return user;
    }));
  }


  registerDelivery(username:string, password:string,phone:number){
    return this.http.put<any>(`${environment.apiUrl}/delivery/register`, { 'Ausername': username, 'Apassword':password,
    'Aphone':phone})
    .pipe(map(user => {


    return user;
    }));
  }

}
