import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  hotelId: any;
  user: any = {
    firstname: "",
    lastname: ""
  };
  loginChange: Subject<boolean> = new Subject<boolean>();
  getHotels() {
    return this.http.get(environment.baseUrl + "/hotels");
  }

  isUserloggedIn(val) {
    this.loginChange.next(val);
  }

  validateUserDetails(userName, password) {
    const userDetails = {
      name: userName,
      password: password
    };
    return this.http.post(environment.baseUrl + "/auth", JSON.stringify(userDetails));
  }
  confirmBooking(hotelName)
  {
    const selectedhotel = {
      hotelName:hotelName
    };
 this.http.post(environment.baseUrl + "/booking",JSON.stringify(hotelName)).subscribe((response:any) =>{
   alert( response.success ? ' Booking success' : 'Booking fail');
 });
  }
}
