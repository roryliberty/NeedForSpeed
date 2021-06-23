import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { VehiclesService } from "../../vehicles.service";
import { Vehicle } from "../../vehicle";

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  public addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      VehicleYear: ['', [Validators.required]],
      VehicleMake: ['', [Validators.required]],
      VehicleModel: ['', [Validators.required]]
    });
  }

  public get getControl(): {[p: string]: AbstractControl} {
    return this.addForm.controls;
  }

  public onSubmit(): void {
    console.log(this.addForm.value);
  }

  public addVehicle(VehicleYear, VehicleMake, VehicleModel): void {
    this.vehicleService.addVehicle(VehicleYear, VehicleMake, VehicleModel);
  }

}
