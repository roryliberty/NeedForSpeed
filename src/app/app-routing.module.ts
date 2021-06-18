import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleAddComponent } from "./vehicle-add/vehicle-add.component";
import { VehiclesComponent } from "./vehicles/vehicles.component";

const routes: Routes = [
  { path: 'vehicle/add', component: VehicleAddComponent },
  { path: 'vehicles', component: VehiclesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
