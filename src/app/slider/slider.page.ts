import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.page.html",
  styleUrls: ["./slider.page.scss"]
})
export class SliderPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  async goTabs() {
    await this.navCtrl.navigateForward("/tabs/tab1");
  }
}
