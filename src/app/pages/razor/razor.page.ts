import { Component, OnInit } from '@angular/core';

declare var RazorpayCheckout : any;

@Component({
  selector: 'app-razor',
  templateUrl: './razor.page.html',
  styleUrls: ['./razor.page.scss'],
})
export class RazorPage implements OnInit {

  paymentAmount : number = 10000;
  currency : string = 'INR';
  currencyIcon : string ='Rs ';
  razor_key ='rzp_test_66i456J6yaiZPZ';

  constructor() { }

  ngOnInit() {
  }

  payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'foo',
      prefill: {
        email: 'rangeya.raghava@gmail.com',
        contact: '8208911590',
        name: 'Rangeya'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
