import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from 'app/_models/restaurant';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    constructor(private http: HttpClient) { }

    getUser(id: number){
        return this.http.get<any>(`${environment.apiUrl}/user/users/${id}`)//SOR
            .pipe(map(user => {
                return user;
        }));
    }
  
}