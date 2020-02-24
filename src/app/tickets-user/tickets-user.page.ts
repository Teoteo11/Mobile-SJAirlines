import { TicketService } from "./../../services/ticket.service";
import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { BookingService } from "src/services/booking.service";
import { Ticket } from "src/interfaces";
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-tickets-user",
  templateUrl: "./tickets-user.page.html",
  styleUrls: ["./tickets-user.page.scss"]
})
export class TicketsUserPage implements OnInit {

  private ticketsID: string[];
  private tickets: Ticket[] = [];
  // private userTicket: Ticket;
  private userID: string;

  constructor(
    // private navCtrl: NavController,
    private bookingService: BookingService,
    private ticketService: TicketService
  ) {}
  
  async ngOnInit() {
    this.userID = localStorage.getItem("user-id") as string;
    this.bookingService.getTicketsIDFromUserID(this.userID).subscribe(
      (res: HttpResponse<string[]>) => {
        console.log('Ho fatto la richiesta tramite il service');
        this.ticketsID = res.body;
        this.ticketService.getAllTicketsById(this.ticketsID).subscribe(
          (res: Ticket) => {
            // console.log(`Questo è ${res._id}`);
            this.tickets.push(res);
          });
          console.table(this.tickets);
        });
        // console.log(`Questo è tickets. ${this.ticketsID}`);
  }
    // this.userTicket = this.ticketService.getTicketById(this.tickets);
}
