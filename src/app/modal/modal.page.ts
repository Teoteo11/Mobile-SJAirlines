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
  allAirports: Airport[];

  constructor(
    private modalController: ModalController,
    private airportsService: AirportsService
  ) {}

  async ngOnInit() {
    this.allAirports = await this.airportsService.getAirports();
    this.airports = [...this.allAirports];
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

  filterAirports(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() !== "") {
      this.airports = this.allAirports.filter(item => {
        return (
          item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.city.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    } else {
      this.airports = [...this.allAirports];
    }
  }
}
