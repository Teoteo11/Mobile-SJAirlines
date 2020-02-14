import { AirportsService } from "src/services/airport.service";
import { Flight, Airport } from "src/interfaces";
import { FlightsService } from "./../../services/flights.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page implements OnInit {
  flights: Array<Flight> = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private flightsService: FlightsService,
    private airportService: AirportsService,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    const data = {
      params: { ...this.activatedRoute.snapshot.params },
      query: { ...this.activatedRoute.snapshot.queryParams }
    };
    if (!data.params.checkOut) {
      delete data.params.checkOut;
    }
    console.log("Data: ", data);
    try {
      // const airport = await this.airportService.getAirportById(
      //   data.params.departure
      // );
      // console.log("Aeroporto:", airport.name);
      (await this.flightsService.getFlights(data)).forEach(async flight => {
        const [departure, destination] = await Promise.all([
          this.airportService.getAirportById(flight.departure),
          this.airportService.getAirportById(flight.destination)
        ]);
        [flight.departure, flight.destination] = [
          departure.name,
          destination.name
        ];
        this.flights.push(flight);
      });
      return;
    } catch (err) {
      console.log("Err: ", err);
    }
  }

  async launchDetail() {
    await this.navCtrl.navigateForward("/details");
  }
}
