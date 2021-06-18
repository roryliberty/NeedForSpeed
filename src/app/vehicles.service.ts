import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  uri = 'http://localhost:4000/vehicles';

  constructor(private http: HttpClient) { }

  addVehicle(VehicleYear, VehicleMake, VehicleModel) {
    const obj = {
      VehicleYear,
      VehicleMake,
      VehicleModel
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}
