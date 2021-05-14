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
  getRestaurants(){
    return  this.http.get<Restaurant[]>(`${environment.apiUrl}/user/table`)
    .pipe(map(rest => {
      
      
      return rest;
    }));
    
  }
}
