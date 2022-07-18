import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ConverterComponent } from './converter.component'; 
import { FormBuyComponent } from './FormBuy/formbuy.component'; 
import { FormSaleComponent } from './FormSale/formsale.component'; 
// import {ConverterRoutingModule} ?
@NgModule({
  declarations: [
    ConverterComponent,
    FormBuyComponent,
    FormSaleComponent
  ],
  imports: [
    BrowserModule,
    // ConverterRoutingModule
  ],
  providers: [],
  bootstrap: [ConverterComponent]
})
export class ConverterModule { }