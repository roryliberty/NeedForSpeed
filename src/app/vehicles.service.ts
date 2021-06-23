import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vehicle } from "./vehicle";

const baseUrl = 'http://localhost:8080/api/vehicles'

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
