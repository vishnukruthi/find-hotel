import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  constructor(public api: AppServiceService,
    public route : Router) { }
  totalHotels:Array<any>;
  selectedHotel:any ={
    name:"",
  };
  ngOnInit() {
    this.api.getHotels().subscribe((response: Array<any>) => {
      console.log(response)
      this.totalHotels = response;
    })
  }
  gotoDesc(id)
  {
   this.api.hotelId=id;
  }

  validateLoginDetails(name)
  {
    if(this.api.user.firstname != "")
    {
      this.api.confirmBooking(name);
    }
    else{
this.route.navigateByUrl("/login");
    }
  }

}
