import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  carDetails:CarDetail[]=[]
  dataLoaded=false;
  constructor(private cardetailservice:CardetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
      this.cardetailservice.getCarDetails().subscribe((response)=>
      {
        this.carDetails=response.data;
        this.dataLoaded=true;
      })    
    }
  }


