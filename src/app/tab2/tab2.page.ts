import { Component, OnInit } from "@angular/core";
import { ModalController, NavController, ToastController } from "@ionic/angular";
import { ModalPage } from "./../modal/modal.page";
import { Airport } from "src/interfaces";
import { LoginService } from 'src/services/login.service';

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
  private disabledWayBack = false;


  constructor(
    public navCtrl: NavController,
    private modalController: ModalController,
    private toastController: ToastController,
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
    if (
      this.airportSelectedDeparture != null &&
      this.airportSelectedDestination != null &&
      (this.checkIn != null || this.checkout != null)
    ) {
      console.log(this.checkIn);
      const url = `/tabs/tab3?${
        Boolean(this.airportSelectedDeparture._id)
          ? `departure=${this.airportSelectedDeparture._id}`
          : ""
      }${
        Boolean(this.airportSelectedDestination._id)
          ? `&destination=${this.airportSelectedDestination._id}`
          : ""
      }${
        Boolean(this.checkIn) && this.checkIn.toString() !== ""
          ? `&checkIn=${new Date(this.checkIn).getTime()}`
          : ""
      }${
        Boolean(this.checkout) && this.checkout.toString() !== ""
          ? `&checkOut=${new Date(this.checkout).getTime()}`
          : ""
      }`;
      await this.navCtrl.navigateForward(url);
    } else {
      this.presentToast("Insert values in the fields");
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
