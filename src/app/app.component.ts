import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'paper-plane'
    },
    {
      title: 'Account',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Order',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'GeoLocation',
      url: '/geolocation',
      icon: 'archive'
    },

    {
      title: 'Camera',
      url: '/camera',
      icon: 'archive'
    },

    {
      title: 'RazorPay',
      url: '/razor',
      icon: 'archive'
    },

     {
      title: 'Payment-Gateway',
      url: '/payment',
      icon: 'archive'
    },
    
  ];
  public labels = ['Car', 'Bike', 'Other'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
