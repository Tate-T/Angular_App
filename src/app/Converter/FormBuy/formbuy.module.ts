import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormBuyComponent } from './formbuy.component'; 
// import {ConverterRoutingModule} ?
@NgModule({
  declarations: [
    FormBuyComponent
  ],
  imports: [
    BrowserModule,
    // ConverterRoutingModule
  ],
  providers: [],
  bootstrap: [FormBuyComponent]
})
export class FormBuyModule { }