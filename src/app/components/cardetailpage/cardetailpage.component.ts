import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetailpage',
  templateUrl: './cardetailpage.component.html',
  styleUrls: ['./cardetailpage.component.css']
})
export class CardetailpageComponent implements OnInit {
  carImages:CarImage[]=[]
  car:CarDetail[]=[]
  constructor(private carImageService:CarimageService,private carDetailService:CardetailService, private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((params)=>{
      if(params["carId"]){
        this.getCarImages(params["carId"])
        this.getCarDetail(params["carId"])
      }
    })
  }
  getCarImages(carId:number){
    this.carImageService.getCarImages(carId).subscribe((response)=>{
      this.carImages=response.data
    });
  }
  getCarDetail(carId:number){
    this.carDetailService.getCarDetails(carId).subscribe((response)=>{
      this.car=response.data;
    })
  }
}
