import { Component } from "@angular/core"; 

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

    //  handleInputChange (e: string) {
    //     const { value } = e.currentTarget;
    //     this.currencySum = value;
    //   };
    
      getAmountBuy () {
        switch (selectValue.current.value) {
          case 'USD':
            this.currencyResult = rates[0].sale * this.currencySum;
            break;
          case 'EUR':
            this. currencyResult = rates[1].sale * this.currencySum;
            break;
          default:
            return;
        }
      };

      getAmountSale () {
        switch (selectValue.current.value) {
          case 'USD':
            currencyResult = currencySum / rates[0].sale;
            currencyType = rates[0].ccy;
            break;
          case 'EUR':
            currencyResult = currencySum / rates[1].sale;
            currencyType = rates[1].ccy;
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