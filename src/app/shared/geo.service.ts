import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
// import * as GeoFire from "geofire"
import { BehaviorSubject } from 'rxjs';
import { GeoCollectionReference, GeoFirestore, GeoQuery, GeoQuerySnapshot } from 'geofirestore';

import GeoFire from 'geofire';
//import GeoFire = require('geofire');

//import { GeoFire } from 'geofire';


//declare var GeoFire: any;

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  dbRef :any;
  geoFire : any;
  firestore : any;
  geofirestore : GeoFirestore;
  hits = new BehaviorSubject([])

  constructor(private db : AngularFireDatabase) {
    this.firestore = firebase.firestore();
    // this.dbRef = this.db.list('/GeoLocation');
     //this.geoFire = new GeoFire(this.dbRef);
     // Create a Firestore reference
    // this.firestore = this.dbRef.firestore();

// Create a GeoFirestore reference
 this.geofirestore = new GeoFirestore(this.firestore);
 //this.testLocation();

    // const geoFireInstance = new geofire.GeoFire(this.dbRef);
   }

   testLocation() {
     console.log('inside testlocation')
    const geocollection: GeoCollectionReference = this.geofirestore.collection('GeoLocation');
    console.log(geocollection);

    // Add a GeoDocument to a GeoCollection
// geocollection.add({
//   name: 'Birla Hospital',
//   score: 100,
//   // The coordinates field must be a GeoPoint!
//   coordinates: new firebase.firestore.GeoPoint(18.6257, 73.7748)
// })

// geocollection.add({
//   name: 'Blue Ridge',
//   score: 101,
//   // The coordinates field must be a GeoPoint!
//   coordinates: new firebase.firestore.GeoPoint(18.5758, 73.7404)
// })

// geocollection.add({
//   name: 'Spot 18',
//   score: 102,
//   // The coordinates field must be a GeoPoint!
//   coordinates: new firebase.firestore.GeoPoint(18.5936, 73.7860)
// })

// Create a GeoQuery based on a location
const query: GeoQuery = geocollection.near({ center: new firebase.firestore.GeoPoint(18.6057, 73.7706), radius: 3 });

// Get query (as Promise)
query.get().then((value: GeoQuerySnapshot) => {
  // All GeoDocument returned by GeoQuery, like the GeoDocument added above
  console.log(value.docs);
});
   }

   setLocation(key :string,coords:Array<number>) {
     this.geoFire.set(key,coords)
     
   }

   getLocation(radius:number,coords:Array<number>){
     this.geoFire.query({
       center : coords,
       radius : radius
     })
     .on('key Enterd',(key,location,distance) =>{
       let hit = {
         location : location,
         distance :distance
       }
       let currentHits = this.hits.value;
       currentHits.push(hit)
       this.hits.next(currentHits)
     })

   }
}
