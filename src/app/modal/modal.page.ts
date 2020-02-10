import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AirportsService } from "src/services/airport.service";
import { Airport } from "src/interfaces";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  airports: Airport[];

  constructor(
    private modalController: ModalController,
    private airportsService: AirportsService
  ) {}

  async ngOnInit() {
    this.airports = await this.airportsService.getAirports();
    console.log("this.airports:", this.airports);
  }
  // async ngOnInit() {
  //   this.airports = await this.airportsService.getAirports();
  //   console.log("this.airports:", this.airports);
  // }
  async closeModal() {
    await this.modalController.dismiss();
  }
  selectAirport(airport: Airport): void {
    this.modalController.dismiss({ airport });
  }
}
