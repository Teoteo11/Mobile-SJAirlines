import { Flight } from "./../interfaces";
import { User } from "src/interfaces";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TicketService {
  // url = "http://localhost:3005/tickets";
  url = "https://api.sjairlines.tk/tickets";
  user: User;
  flight: Flight;
  constructor(private httpClient: HttpClient) {}

  public createTicket(flight: Flight): Observable<any> {
    console.log("Flight-ID:", flight._id);
    return this.httpClient.post<any>(`${this.url}`, {
      idFlight: flight._id
    });
  }
}
