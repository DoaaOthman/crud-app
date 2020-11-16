import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../shared/cars.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;
  constructor(
    private _Router:Router,
    private _CarsService:CarsService,
    private _FormBuilder:FormBuilder
    ) { }

  ngOnInit() {
    this.buildAddForm();
  }
  onSubmit(){
    this.submitted = true;
    //if in vaild stop
    if(this.addForm.invalid){
      return;
    }
    this._CarsService.addCar(this.addForm.value).subscribe(res=>{
      alert("success");
     this._Router.navigate(['../List'])
    },
    err =>{
      console.log(err);
    }
    );
  }
  buildAddForm(){
    this.addForm = this._FormBuilder.group({
      name: [null, Validators.required],
      color: [null, Validators.required],
      price: [null, Validators.required],
      model: [null, Validators.required]
    })
  }
}
