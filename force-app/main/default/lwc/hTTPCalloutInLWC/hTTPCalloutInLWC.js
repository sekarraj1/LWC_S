import { LightningElement, track } from 'lwc';
const options=[
    {label: 'USD', value:'USD'},
    {lable: 'EUR', value: 'EUR'},
    { label: 'CAD', value: 'CAD' },
    { label: 'GBP', value: 'GBP' },
    { label: 'INR', value: 'INR' }];
export default class HTTPCalloutInLWC extends LightningElement {
    @track fromCurrencyValue;
    @track options = options;

    handleFromCurrencyChange(event){
        this.fromCurrencyValue =event.detail.value;
    }
   /* handleCurrencyConversion(){
        fetch('https://https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' 
        + this.fromCurrencyValue + '&to_currency=' + this.toCurrencyValue + '&apikey=HYYUONO2OMEBDPR4',
        {s
            //Request type
            method : "GET",
            headers:{
                //Content type
                "Content-Type":"application/json",
                "Authorization": ""
            }
        }
        )
    }*/
}