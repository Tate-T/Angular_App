import { Component, OnInit } from "@angular/core"; 

import rates from "../../data/data.json";

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.css'],
    // interpolation: ['{{', '}}']
})

export class ConverterComponent {
   
    currencyType: string = 'USD';
    currencyResult?:number = 0;
    currencySum?: string = '';

    // ngOnInit() {
    //     getCurrencyRateApi().then(response => {
    //         setRates(response.rates)
    // }

     handleInputChange (event: any) {
        const { value } = event.currentTarget.value;
        this.currencySum = value;
      };
    
      getAmountBuy (currencySum: any) {
        switch (currencySum) {
          case 'USD':
            this.currencyResult = rates[0].sale * +currencySum;
            break;
          case 'EUR':
            this. currencyResult = rates[1].sale * +currencySum;
            break;
          default:
            return;
        }
      };

      getAmountSale (currencySum: any) {
        switch (currencySum) {
          case 'USD':
            this.currencyResult = +currencySum / rates[0].sale;
            this.currencyType = rates[0].ccy;
            break;
          case 'EUR':
            this.currencyResult = +currencySum / rates[1].sale;
            this.currencyType = rates[1].ccy;
            break;
          default:
            return;
        }
      };
    
    //   onSubmit (e: any) {
    //     e.preventDefault();
    //     this.getAmountBuy();
    //   };
}