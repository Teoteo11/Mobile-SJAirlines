import { TicketService } from "./../../services/ticket.service";
import { AirportsService } from "src/services/airport.service";
import { Flight, Airport, User, Ticket } from "src/interfaces";
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
  flight: Flight;
  idUser: User;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private flightsService: FlightsService,
    private airportService: AirportsService,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    const query = {
      ...this.activatedRoute.snapshot.queryParams
    };
    // !data.
    // if (data.params.checkOut) {
    //   delete data.params.checkOut;
    // }
    console.log("Data: ", query);
    try {
      // const airport = await this.airportService.getAirportById(
      //   data.params.departure
      // );
      // console.log("Aeroporto:", airport.name);
      (await this.flightsService.getFlights(query)).forEach(async flight => {
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
      if (query.checkOut) {
        if (this.activatedRoute.snapshot.queryParams.departure) {
          query.destination = this.activatedRoute.snapshot.queryParams.departure;
        }
        if (this.activatedRoute.snapshot.queryParams.destination) {
          query.departure = this.activatedRoute.snapshot.queryParams.destination;
        }
        query.checkIn = query.checkOut;
        (await this.flightsService.getFlights(query)).forEach(async flight => {
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
      }
      return;
    } catch (err) {
      console.log("Err: ", err);
    }
  }

  async launchDetail(
    departure: string,
    destination: string,
    duration: number,
    price: number,
    idAirplane: string
  ) {
    // details:idFlight
    await this.navCtrl.navigateForward(
      `/details/${departure}/${destination}/${duration}/${price}/${idAirplane}`
    );
  }

  buyTicket(flight: Flight) {
    if (this.ticketService.createTicket(flight)) {
      // TODO: add selected ticket to tickets[] of the current user
      console.log("L'ho preso", flight);
    } else {
      console.log("E' successo  qualcosa");
    }
  }
}
