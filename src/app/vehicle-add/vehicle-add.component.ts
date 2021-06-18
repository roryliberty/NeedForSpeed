import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { VehiclesService } from "../vehicles.service";
import {Vehicle} from "../vehicle";

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      VehicleYear: ['', [Validators.required]],
      VehicleMake: ['', [Validators.required]],
      VehicleModel: ['', [Validators.required]]
    });
  }

  get getControl() {
    return this.addForm.controls;
  }

  onSubmit() {
    console.log(this.addForm.value);
  }

  addVehicle(VehicleYear, VehicleMake, VehicleModel) {
    this.vehicleService.addVehicle(VehicleYear, VehicleMake, VehicleModel);
  }

}
