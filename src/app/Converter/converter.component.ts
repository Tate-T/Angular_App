import { Component, OnInit } from "@angular/core"; 
import { HttpClient } from '@angular/common/http';

// import rates from "../../data/data.json";

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.css'],
    // interpolation: ['{{', '}}']
})



export class ConverterComponent {

    // constructor(private http: HttpClient) { }

    currencyType: string = 'USD';
    currencyResult?:number = 0;
    currencySum?: string = '';
    response: any = {
        ccy: "",
        base_ccy: "",
        buy: "",
        sale: ""
      };

    // rates: any = this.http.get('../../data/data.json').subscribe((rates: any) => {
    //     return this.response = {
    //         ccy: rates.rate.ccy,
    //         base_ccy: rates.rate.base_ccy,
    //         buy: rates.rate.find((item: any) => item.buy  === 'USD' || 'EUR'),
    //         sale: rates.rate.find((item: any) => item.sale === 'USD' || 'EUR'),
    //     }
    //   });

    // ngOnInit() {
    //     getCurrencyRateApi().then(response => {
    //         setRates(response.rates)
    // }

     handleInputChange (event: any) {
        const { value } = event.currentTarget.value;
        this.currencySum = value;
      };
    
      getAmountBuy (currencySum: any, rates: any) {
        switch (currencySum) {
          case 'USD':
            // this.currencyResult = rates[0].sale * +currencySum;
            this.currencyResult = 37.6000 * +currencySum;
            break;
          case 'EUR':
            // this. currencyResult = rates[1].sale * +currencySum;
            this. currencyResult = 36.20000 * +currencySum;
            break;
          default:
            return;
        }
      };

      getAmountSale (currencySum: any, rates: any) {
        switch (currencySum) {
          case 'USD':
            // this.currencyResult = +currencySum / rates[0].sale;
            this.currencyResult = +currencySum / 37.20000;
            // this.currencyType = rates[0].ccy;
            this.currencyType = "USD";
            break;
          case 'EUR':
            // this.currencyResult = +currencySum / rates[1].sale;
            this.currencyResult = +currencySum / 36.70000;
            // this.currencyType = rates[1].ccy;
            this.currencyType = "EUR";
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