import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {

  myInput : any;
  isShopAvailable : boolean = false;

  fakeShopList = ['Two Wheeler','Four Wheeler','Three Wheeler','One Wheeler','Puncture Wala','zebra']

  shops : any=[];

  constructor() { }

  ngOnInit() {
  }

  onInput(evt :any) {
     const val = evt.target.value;
     this.shops =[]
     this.isShopAvailable = false;
 if (val && val.trim() != '') {
     this.isShopAvailable = true;
     this.shops = this.fakeShopList.filter((item) => {
     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
 })
  }
}

}
