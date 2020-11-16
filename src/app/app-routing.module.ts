import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './views/cars-list/cars-list.component';
import { CarAddComponent } from './views/car-add/car-add.component';
import { CarEditComponent } from './views/car-edit/car-edit.component';

const routes: Routes = [
  {path:"",redirectTo:"List",pathMatch:'full'},
  { path: 'addcar', component: CarAddComponent },
  { path: 'editcar', component: CarEditComponent },
  { path: 'editcar/:id', component: CarEditComponent },
  {path:"**",component:CarsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
