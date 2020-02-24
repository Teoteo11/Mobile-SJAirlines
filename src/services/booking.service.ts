import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpRequest} from "@angular/common/http";
import { Ticket } from "src/interfaces";
import { environment } from "src/environments/environment";
import { TicketService } from "./ticket.service";
import * as logger  from 'src/environments/logger';
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class BookingService {
  private url = `${environment.SERVER_URL}users`;
  private ticketsID: Ticket[] | null;
  private tickets: Ticket[];
  private completeTicket: Ticket;

  constructor(
    private http: HttpClient, 
    private ticketService: TicketService
    ) {}

  getBookingsFromUserID(userID: string): Observable<HttpResponse<Ticket[]>> {
    return this.http.get<Ticket[]>(`${this.url}/${userID}/tickets`, environment.HTTP_OPTIONS)

      // .subscribe((res: HttpResponse<Ticket[]>) => {
      //   console.log(`%c I'm doing this request: ${this.url}/${userID}/tickets`, logger.info_message);
      //   this.tickets = res.body;
      //   // console.log(`Tickets: ${this.tickets}`);
      // });
  }

  async getCompleteTicketFromArray(idTicket: string) {
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
