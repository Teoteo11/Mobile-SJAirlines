import { Flight } from "./../interfaces";
import { User } from "src/interfaces";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class TicketService {

  private url = `${environment.SERVER_URL}tickets`;

  user: User;
  flight: Flight;

  constructor(private httpClient: HttpClient) { }

  public createTicket(flight: Flight): Observable<any> {
    console.log("Flight-ID:", flight._id);
    return this.httpClient.post<any>(`${this.url}`, {
      idFlight: flight._id
    });
  }
}
