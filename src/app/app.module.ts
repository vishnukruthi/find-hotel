import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './components/hotels/hotels.component';

import {HeaderComponent} from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';
const routes = [
  {path:"login" , component:LoginComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"descriptions",component:DescriptionsComponent},

  //default 
  { path: '',
    redirectTo: '/hotels',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HotelsComponent,
    HeaderComponent,
    DescriptionsComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }