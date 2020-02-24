import { Component } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  // router: Router;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  myNavCtrl: NavController;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.isAuthenticated()) {
        this.navCtrl.navigateForward('tabs/tab1');
      }
      else {
        if (localStorage.getItem('slider') != 'done') {
          this.launchTutorial();
        }
      }
    });
  }

  launchTutorial() {
    localStorage.setItem('slider', 'done');
    this.navCtrl.navigateForward('slider');

    // if (localStorage.getItem("slider") != "done") {
    //   this.navCtrl.navigateForward("slider");
    //   localStorage.setItem("slider", "done");
    // }
  }

  isAuthenticated() {
    return localStorage.getItem('auth-token') != null;
  }
}
