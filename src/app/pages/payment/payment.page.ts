import { Component, OnInit } from '@angular/core';

import { WebIntent } from '@ionic-native/web-intent/ngx'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  payeeVPA : string
  payeeName : string
  transactionNote : string = "payment for service";
  payAmount:number;
  currency: string='INR';
  transactionReference : string;

  constructor(private webIntent : WebIntent) { }

  ngOnInit() {
    this.pay();
  }

  pay(){
    this.payeeVPA = '1234@upi';
    this.payeeName = 'Raghava';
    this.payAmount = 20;
    this.transactionReference ='#09876'
    console.log('inside pay')
    const url = 'upi://pay?pa=' + this.payeeVPA + '&pn=' + this.payeeName + '&tr=' +this.transactionReference + 'tn=' +this.transactionNote;

   const options = {
     action : this.webIntent.ACTION_VIEW,
     url

   };
   console.log('invoking')
   this.webIntent.startActivityForResult(options).then(SUCCESS =>{
     console.log(SUCCESS);
     
   })

  }

}
