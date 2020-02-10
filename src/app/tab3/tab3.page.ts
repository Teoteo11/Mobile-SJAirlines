import { Flight } from "src/interfaces";
import { FlightsService } from "./../../services/flights.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page implements OnInit {
  flights: Array<Flight>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flightsService: FlightsService
  ) {}

  async ngOnInit() {
    const params = {
      ...this.activatedRoute.snapshot.params,
      ...this.activatedRoute.snapshot.queryParams
    };
    if (!params.checkOut) {
      delete params.checkOut;
    }
    try {
      this.flights = await this.flightsService.getFlights(params);
      return;
    } catch (err) {
      console.log("Err: ", err);
    }
  }
}
