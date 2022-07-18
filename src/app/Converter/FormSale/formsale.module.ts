import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormSaleComponent } from './formsale.component'; 
// import {ConverterRoutingModule} ?
@NgModule({
  declarations: [
    FormSaleComponent
  ],
  imports: [
    BrowserModule,
    // ConverterRoutingModule
  ],
  providers: [],
  bootstrap: [FormSaleComponent]
})
export class FormSaleModule { }