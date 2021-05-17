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
    return this.http.get<any>(`${environment.apiUrl}/delivery/${id}`)//SOR
            .pipe(map(deliveryGuy => {
                return deliveryGuy;
        }));
  }
}
