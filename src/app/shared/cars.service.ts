import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {}
  
  //Get All cars
  getAllCars(){
    return this.http.get('https://5fad97aa2ec98b0016048844.mockapi.io/api/v1/cars');
  }

  //Delete car
  deleteCar(id){
    return this.http.delete(`https://5fad97aa2ec98b0016048844.mockapi.io/api/v1/cars/${id}`)
  }

   //Add car
   addCar(data){
    return this.http.post('https://5fad97aa2ec98b0016048844.mockapi.io/api/v1/cars/',data);
  }

//Get car by id
  getCar(id){
  return this.http.get(`https://5fad97aa2ec98b0016048844.mockapi.io/api/v1/cars/${id}`);
  }

   //Edit car
   updateCar(data,id){
    return this.http.put(`https://5fad97aa2ec98b0016048844.mockapi.io/api/v1/cars/${id}`,data)
  }
}
