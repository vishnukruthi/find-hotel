import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Boolean;
  userName: any;

  constructor(public api: AppServiceService) {
    this.api.loginChange.subscribe( (value) => {
      this.isLoggedIn = value;
      this.userName = value ? this.api.user.firstname : '';
    });
  }

  ngOnInit() { }

}
