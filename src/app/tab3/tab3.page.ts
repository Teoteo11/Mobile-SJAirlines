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
    const data = {
      params: { ...this.activatedRoute.snapshot.params },
      query: { ...this.activatedRoute.snapshot.queryParams }
    };
    if (!data.params.checkOut) {
      delete data.params.checkOut;
    }
    console.log(data);
    try {
      this.flights = await this.flightsService.getFlights(data);
      return;
    } catch (err) {
      console.log("Err: ", err);
    }
  }
}
