import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Flight, Ticket } from "src/interfaces";
import { environment } from "src/environments/environment";
import { TicketService } from "./ticket.service";

@Injectable({ providedIn: "root" })
export class BookingService {
  private url = `${environment.SERVER_URL}users`;
  private ticketsID: Ticket[] | null;
  private tickets: Ticket[];
  private completeTicket: Ticket;

  constructor(private http: HttpClient, private ticketService: TicketService) {}

  getBookingsFromUserID(userID: string): Ticket[] {
    this.http
      .get<Ticket[]>(`${this.url}/${userID}/tickets`, environment.HTTP_OPTIONS)
      .subscribe((res: HttpResponse<Ticket[]>) => {
        this.tickets = res.body;
      });
    return this.tickets;
  }

  getCompleteTicketFromArray(idTicket: string) {
    this.http
      .get<Ticket>(`${this.url}/tickets/${idTicket}`, environment.HTTP_OPTIONS)
      .subscribe((res: HttpResponse<Ticket>) => {
        this.completeTicket = res.body;
      });
    return this.completeTicket;
    // TODO: una get di url/tickets/idTicket e mi torna il singolo biglietto
  }

  addTicket(userID: string) {
    this.http
      .post<Ticket>(`${this.url}/${userID}/tickets`, environment.HTTP_OPTIONS)
      .subscribe();
  }
}
