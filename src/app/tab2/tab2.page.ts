import { ModalPage } from "./../modal/modal.page";
import { Component } from "@angular/core";
import { AirportsService } from "src/services/airport.service";
import { Airport } from "src/interfaces";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const myModal = await this.modalController.create({
      component: ModalPage
    });
    return await myModal.present();
  }
}
