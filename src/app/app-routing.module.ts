import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CardetailpageComponent } from './components/cardetailpage/cardetailpage.component';

import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [

  {path:"", pathMatch:"full", component:CardetailComponent},
  {path:"cars", component:CardetailComponent},
  {path:"cars/brand/:brandId", component:CardetailComponent},
  {path:"cars/brand/:brandId/detail/:carId", component:CardetailpageComponent},
  {path:"cars/color/:colorId",component:CardetailComponent},
  {path:"cars/color/:colorId/detail/:carId", component:CardetailpageComponent},
  {path:"cars/detail/:carId", component:CardetailpageComponent},
  {path:"detail/:carId", component:CardetailpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
