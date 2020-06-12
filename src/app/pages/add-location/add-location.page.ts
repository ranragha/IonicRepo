import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.page.html',
  styleUrls: ['./add-location.page.scss'],
})
export class AddLocationPage implements OnInit {

  locations_form: FormGroup;

  constructor( public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.locations_form = this.formBuilder.group({
      uid: new FormControl(''),
      name: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl('')
    });
  }

  addLocation(values) {
    console.log(values.uid)
    
       this.afs.collection('GeoLocation').add(this.locations_form.value).then(res =>{
         console.log(res)
      })
       .catch(error => {
        console.log(error);
      });
  }

}
