import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   class: 'fas',
    //   icon: 'list'
    // }
    {
      title: 'Cost and Benefits',
      url: '/cost',
      icon: 'money-bill-alt'
    },
    {
      title: 'Mission, Vision, & History',
      url: '/missionVisionHistory',
      icon: 'monument'
    },
    {
      title: 'Corporate Sponsors',
      url: '/sponsors',
      icon: 'building'
    },
    {
      title: 'Program Leaders',
      url: '/leaders',
      icon: 'user-friends'
    },
    {
      title: 'Class',
      url: '/class',
      icon: 'user-graduate'
    },
    {
      title: 'WestTeach',
      url: '/westTeach',
      icon: 'file'
    },
    {
      title: 'Alumni',
      url: '/alumni',
      icon: 'star'
    },
    {
      title: 'Board of Trustees',
      url: '/trustees',
      icon: 'user-tie'
    },
    {
      title: 'Testimonials',
      url: '/testimonials',
      icon: 'comment'
    },
    {
      title: 'Social Media',
      url: '/socialMedia',
      icon: 'share-square'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'phone'
    },
  ];

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
}
