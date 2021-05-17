import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deliveryGuy } from 'app/_models/deliveryGuy';
import { Restaurant } from 'app/_models/restaurant';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  getDeliveryStatus(id: number){
    return this.http.get<any>(`${environment.apiUrl}/delivery/${id}`)
            .pipe(map(deliveryGuy => {
                return deliveryGuy;
        }));
  }

  acceptDelivery(u_id:number,order:number){
    return this.http.post<any>(`${environment.apiUrl}/delivery/accept`,{u_id,order})
            .pipe(map(deliveryGuy => {
                return deliveryGuy;
        }));
  }

  getDeliveryGuy(id: number){
    return this.http.get<any>(`${environment.apiUrl}/delivery/delGuy/${id}`)
            .pipe(map(deliveryGuy => {
                return deliveryGuy;
        }));
  }
  getRegions(){
    return this.http.get<any>(`${environment.apiUrl}/delivery/regions`)
      .pipe(map(deliveryGuy => {
        return deliveryGuy;
    }));
  }

  getUserRegion(id){
    return this.http.get<any>(`${environment.apiUrl}/delivery/regions/${id}`)
    .pipe(map(deliveryGuy => {
      return deliveryGuy;
    }));
  }

  postRegion({region,id}){
    return this.http.post<any>(`${environment.apiUrl}/delivery/regions`,{region,id})
    .pipe(map(deliveryGuy => {
      return deliveryGuy;
    }));
  }

  removeRegion(id,region){

    return this.http.delete<any>(`${environment.apiUrl}/delivery/regions/remove${id}~${region}`)
      .pipe(map(deliveryGuy => {
       return deliveryGuy;
     }));
  }

}
