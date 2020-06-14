import { Component, OnInit } from '@angular/core';
 import { GeoService } from 'src/app/shared/geo.service';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';



@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
})
export class GoogleMapPage implements OnInit {
  lat:number;
  lng:number;
  markers :any;

  // constructor( private geolocation: Geolocation,
  //   private nativeGeocoder: NativeGeocoder) { }
  constructor(private geoService : GeoService ){}

  ngOnInit() {
   // this.getuserLocation();
    //this.geoService.hits.subscribe(hits => this.markers =hits)
    console.log('inside ngoninit')
   this.geoService.testLocation();
  }

  // getuserLocation() {
  //   if(navigator.geolocation){
  //     this.geolocation.getCurrentPosition(position =>{
  //     this.lat = position.coords.latitude;
  //     this.lng = position.coords.longitude;
  //     //this.geoService.getLocation(2,[this.lat,this.lng])
  //     });
  //   }

    // getClosestUser() {
    //   let geoPoint = new Parse.GeoPoint(this.geolocation.coords.latitude, this.geoposition.coords.longitude);
    //   let query = new Parse.Query(Parse.User);
    //   query.near('Location', geoPoint);
    //   query.limit(1);
  
    //   query.find().then(users => {
    //     let user = users[0];
    //     console.log('Closest user', user);
  
    //     let current:Marker = {
    //       lat: user.get('Location').latitude,
    //       lng: user.get('Location').longitude,
    //       label: user.get('name')
    //     };
  
    //     let me:Marker = {
    //       lat: this.geoposition.coords.latitude,
    //       lng: this.geoposition.coords.longitude,
    //       label: 'Me'
    //     };
  
    //     this.navCtrl.push('MapsPage', {data: {current, markers: [me, current]}});
    //   }, err => {
    //     console.log('Error getting closest user', err)
    //   })
    // }

    

    


}
