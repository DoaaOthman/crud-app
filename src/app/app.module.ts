import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './views/cars-list/cars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CarAddComponent } from './views/car-add/car-add.component';
import { CarEditComponent } from './views/car-edit/car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarAddComponent,
    CarEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
