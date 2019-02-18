import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../services/app-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api:AppServiceService,
    public route:Router) { }


  showPassword:Boolean;
  enteredPassword:any;
  userName:any;
  ngOnInit() {
    showPassword:false;
  }

  showHidePassword(password)
  {
   this.showPassword =!password;
  }
  validateUser(){
   this.api.validateUserDetails(this.userName,this.enteredPassword).subscribe((response: any) => {
    this.api.user.firstname = response.user.firstname;
    this.api.user.lastname = response.user.lastname;
    this.api.isUserloggedIn(true);
    this.route.navigateByUrl("/hotels");
  })
  }
}
