import { Flight, Ticket } from "./../interfaces";
import { User } from "src/interfaces";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class TicketService {
  private url = `${environment.SERVER_URL}tickets`;
  private tickets: Ticket[] | null;

  user: User;
  flight: Flight;

  constructor(private httpClient: HttpClient) {}

  public createTicket(flight: Flight): Observable<any> {
    console.log("Flight-ID:", flight._id);
    return this.httpClient.post<any>(`${this.url}`, {
      idFlight: flight._id
    });
  }

  public getAllTicketsById(ticketID: string[]): Observable<Ticket> {
    return new Observable(subscriber => {
      ticketID.forEach(async element => {
        const res: HttpResponse<Ticket> = await this.httpClient.get<Ticket>(`${this.url}/${element}`, environment.HTTP_OPTIONS).toPromise();
        subscriber.next(res.body);
      });
    });

    // return this.httpClient.get<Ticket>(`${this.url}/${ticketID}`, environment.HTTP_OPTIONS);
    
    // .subscribe(
    //   (res: HttpResponse<Ticket>) => {
    //     ticket = res.body;
    //   });
    // return ticket;
  }
}
