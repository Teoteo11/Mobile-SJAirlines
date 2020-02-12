import { Tab3Page } from "./../tab3/tab3.page";
import { ModalPage } from "./../modal/modal.page";
import { Component } from "@angular/core";
import { Airport } from "src/interfaces";
import { ModalController, NavController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  airportSelectedDeparture: Airport;
  airportSelectedDestination: Airport;
  checkIn: Date;
  checkout: Date | string;

  constructor(
    public navCtrl: NavController,
    private modalController: ModalController
  ) {}

  async openModal() {
    const myModal = await this.modalController.create({
      component: ModalPage
    });
    await myModal.present();
    const { data } = await myModal.onWillDismiss();
    if (data) {
      this.airportSelectedDeparture = data.airport as Airport;
      // console.log(this.airportSelectedDeparture);
    }
  }

  async openModal2() {
    const myModal = await this.modalController.create({
      component: ModalPage
    });
    await myModal.present();
    const { data } = await myModal.onWillDismiss();
    if (data) {
      this.airportSelectedDestination = data.airport as Airport;
      // console.log(this.airportSelectedDestination);
    }
  }

  async launchTab3Page() {
    console.log(this.checkIn);
    const url = `/tabs/tab3/${this.airportSelectedDeparture._id}/${
      this.airportSelectedDestination._id
    }?${
      Boolean(this.checkIn) && this.checkIn.toString() !== ""
        ? `checkIn=${new Date(this.checkIn).toISOString()}`
        : ""
    }${
      Boolean(this.checkout) && this.checkout.toString() !== ""
        ? `&checkOut=${new Date(this.checkout).toISOString()}`
        : ""
    }`;
    await this.navCtrl.navigateForward(url);
  }
}
