import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { HttpClient } from '@angular/common/http';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    NaviComponent,
    ColorComponent,
    CardetailComponent,
    CustomerComponent,
    RentalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
