import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../shared/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars:any;
  searchText:string;
  constructor( private _CarsService:CarsService) { 
    
  }

  ngOnInit(): void {
    this.getCars()
  }

  //Get Cars 
  getCars(){
    this._CarsService.getAllCars().subscribe(res=>{
      this.cars =res;
    })
  }

  //Delete Cars 
  deleteCar(id) {
    this._CarsService.deleteCar(id).subscribe(res=>{
      
      alert("Delete item")
      this.getCars()
      
    },
    err=>{
      console.log(err)
    })
  }
    //add Cars 
    addCar(id) {
      this._CarsService.addCar(id).subscribe(res=>{
        
        alert("Delete item")
        this.getCars()
        
      },
      err=>{
        console.log(err)
      })
    }

}
