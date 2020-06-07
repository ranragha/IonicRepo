import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  location : { lat : number, lng : number}

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location = {
        lat : resp.coords.latitude,
        lng : resp.coords.longitude
      };
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
