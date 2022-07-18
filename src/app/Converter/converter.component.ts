import { Component } from "@angular/core"; 

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.css'],
    interpolation: ['{{', '}}']
})

export class ConverterComponent {
   
    currencyType = 'USD'
    currencyResult = ''
    currencyResultSum = ''
}