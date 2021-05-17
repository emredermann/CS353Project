import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from 'app/_models/restaurant';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor(private http: HttpClient) { }
  public rest_id:number;
  getRestID(){
    return this.rest_id;
  }
  setRestID(id:number){
    this.rest_id = id;
  }
  getRestaurants(){
    return  this.http.get<Restaurant[]>(`${environment.apiUrl}/user/table`)
    .pipe(map(rest => {
      
      
      return rest;
    }));
    
  }
  getRestaurantMenu(id:number){
    console.log("herei");
    return  this.http.get<any[]>(`${environment.apiUrl}/user/menu/${id}`)
    .pipe(map(rest => {
      
      
      return rest;
    }));
  }

  getOwnerRestaurants(id:number){
    return  this.http.get<Restaurant[]>(`${environment.apiUrl}/owner/restaurant/${id}`)
    .pipe(map(rest => {
      
      
      return rest;
    }));
    
  }
}
