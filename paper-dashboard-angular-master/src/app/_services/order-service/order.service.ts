import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from 'app/_models/restaurant';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getNewDeliveryOrders(id:number){
    alert("anan1");
    return this.http.get<any>(`${environment.apiUrl}/delivery/orders/new/${id}`)
    .pipe(map(user => {
        return user;
    }));
  }

  getOldDeliveryOrders(id:number){
    alert("anan2");
    return this.http.get<any>(`${environment.apiUrl}/delivery/orders/old/${id}`)
    .pipe(map(user => {
       
        
        return user;
    }));
  
  
  }

  getUserOrders(id:number){
    return this.http.get<any>(`${environment.apiUrl}/user/orders/${id}`)
    .pipe(map(user => {
       
        
        return user;
    }));
  
  
  }

  getOrderDetails(id:number){
    
    return this.http.get<any>(`${environment.apiUrl}/delivery/orders/${id}`)
    .pipe(map(user => {
       
        
        return user;
    }));
  }

  getOrderHistory(id:number){
     return this.http.get<any>(`${environment.apiUrl}/owner/orders/${id}`)
    .pipe(map(user => {
       
        
        return user;
    }));
  }

  getReviews(id:number){
    
    return this.http.get<any>(`${environment.apiUrl}/owner/reviews/${id}`)
    .pipe(map(user => {
       
      
        return user;
    }));
  }

  getOwnerOrderDetails(id:number){
    
    return this.http.get<any>(`${environment.apiUrl}/owner/orders/${id}`)
    .pipe(map(user => {
       
        
        return user;
    }));
  }

}
