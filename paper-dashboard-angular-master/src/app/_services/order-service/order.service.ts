import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'app/_models/menuItem';
import { Restaurant } from 'app/_models/restaurant';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class MENU_ITEM {
  FOOD_ID: number;
  FOODNAME: string;
  PRICE: number;
  RESTAURANT_ID:number;
    ISAVAILABLE:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getNewDeliveryOrders(id:number){
    return this.http.get<any>(`${environment.apiUrl}/delivery/orders/new/${id}`)
    .pipe(map(user => {
        return user;
    }));
  }

  getOldDeliveryOrders(id:number){
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

  insertOrder(list:MENU_ITEM){

  }
  
  

  getItemOptions(id){
    return this.http.get<any>(`${environment.apiUrl}/user/item/${id}`)
    .pipe(map(user => {
       
        
        return user;
    }));

  }

  getUserCombos(id){
    return this.http.get<any>(`${environment.apiUrl}/user/combos/${id}`)
    .pipe(map(user => {
       
        
        return user;
    }));
  }
  getCombo(id){
    return this.http.get<any>(`${environment.apiUrl}/user/combo/${id}`)
    .pipe(map(user => {
       
        
        return user;
    }));
    }
    removeCombo(id){
      return this.http.delete<any>(`${environment.apiUrl}/user/combo/rem/${id}`)
      .pipe(map(user => {
         
          
          return user;
      }));
      }


      createOrder(cust_id, rest_id){
        return this.http.put<any>(`${environment.apiUrl}/user/order/create`,{cust_id, rest_id} )
        .pipe(map(user => {
           
            
            return user;
        }));
      }

      addToOrder(fud_t, ono, opt, count){
        
        alert("fud:" +fud_t);
        return this.http.put<any>(`${environment.apiUrl}/user/order/add/${fud_t}`, {fud_t,ono,opt,count} )
        .pipe(map(user => {
           
            
            return user;
        }));
      }
      changeOrderStatus(stat,ono){
        return this.http.post<any>(`${environment.apiUrl}/user/order/update`,{stat, ono} )
        .pipe(map(user => {
           
            
            return user;
        }));
      }

  }

 
  

