import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  currentCar:number
  constructor(private cardetailservice: CardetailService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params)=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else{
        this.getCarDetails();
      }
    })

  }

  getCarDetails() {
    this.cardetailservice.getAllCars().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId:number){
    this.cardetailservice.getCarsByBrand(brandId).subscribe((response)=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.cardetailservice.getCarsByColor(colorId).subscribe((response)=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }
  getCurrentCarId(car:CarDetail){
    this.currentCar=car.carId;
    console.log(car.carName)
  }
}
