import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {
  totalHotels: Array<any>;

  selectedHotel: any = {
    description: "",
    name: "",
    image: "",
    available: ""
  };
  constructor(public api: AppServiceService,
    public route: Router) { }

  ngOnInit() {
    this.api.getHotels().subscribe((response: Array<any>) => {
      this.totalHotels = response;

      this.selectedHotel = this.totalHotels.find((hotelId) => {
        return hotelId.id === this.api.hotelId;
      });
    })
  }

  validateLoginDetails() {
    if (this.api.user.firstname != "") {
      this.api.confirmBooking(this.selectedHotel.name);
    }
    else {
      this.route.navigateByUrl("/login");
    }
  }
}
