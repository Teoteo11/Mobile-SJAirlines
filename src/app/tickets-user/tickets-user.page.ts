import { TicketService } from "./../../services/ticket.service";
import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { BookingService } from "src/services/booking.service";
import { Ticket } from "src/interfaces";
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: "app-tickets-user",
  templateUrl: "./tickets-user.page.html",
  styleUrls: ["./tickets-user.page.scss"]
})
export class TicketsUserPage implements OnInit {

  public tickets: Ticket[];
  public userTicket: Ticket;
  public userID: string;

  constructor(
    // private navCtrl: NavController,
    private bookingService: BookingService,
    private ticketService: TicketService
  ) {
  }
  
  async ngOnInit() {
    this.userID = localStorage.getItem("user-id") as string;
    this.bookingService.getBookingsFromUserID(this.userID).subscribe(
      (res: HttpResponse<Ticket[]>) => {
        console.log('Ho fatto la richiesta tramite il service');
        this.tickets = res.body;
        console.log(`Questo è tickets. ${this.tickets}`);

      }
    )
    // this.userTicket = this.ticketService.getTicketById(this.tickets);
  }
}
