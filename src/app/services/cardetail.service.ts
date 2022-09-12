import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  apiUrl="https://localhost:44367/api/";
  constructor(private httpClient:HttpClient) { }

  getAllCars():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcars"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>
  {
    let newPath=this.apiUrl+"cars/getcarsbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath); 
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetails(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetail?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
