import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from '../../shared/cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  editForm: FormGroup;
  submitted: boolean;
  itemId :any;
  carDetails: any = {};
  constructor(
    private _Router:Router,
    private _ActiveRoute:ActivatedRoute,
    private _CarsService:CarsService,
    private _FormBuilder:FormBuilder
    ) { }

  ngOnInit() {
    this.buildEditForm();

    //Get item data id 
    this._ActiveRoute.params.subscribe(params =>{
      this.itemId = params.id;
      // console.log(params.id)
      this._CarsService.getCar(params.id).subscribe(res=>{
        
        this.carDetails = res;
        console.log(this.carDetails)
      })
    })
  }
  onSubmit(){
    this.submitted = true;
    //if in vaild stop
    if(this.editForm.invalid){
      return;
    }
    
    this._CarsService.updateCar(this.editForm.value,this.itemId).subscribe(res=>{
      alert("success");
     this._Router.navigate(['../List'])
    },
    err =>{
      console.log(err);
    }
    );
  }
  buildEditForm(){
    this.editForm = this._FormBuilder.group({
      name: [null, Validators.required],
      color: [null, Validators.required],
      price: [null, Validators.required],
      model: [null, Validators.required]
    })
  }
}
