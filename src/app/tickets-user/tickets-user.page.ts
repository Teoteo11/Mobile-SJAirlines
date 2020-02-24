import { TicketService } from "./../../services/ticket.service";
import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { BookingService } from "src/services/booking.service";
import { Ticket } from "src/interfaces";

@Component({
  selector: "app-tickets-user",
  templateUrl: "./tickets-user.page.html",
  styleUrls: ["./tickets-user.page.scss"]
})
export class TicketsUserPage {
  public tickets: Ticket[];
  public userTicket: Ticket;

  constructor(
    private navCtrl: NavController,
    private bookingService: BookingService,
    private ticketService: TicketService
  ) {}

  async ionViewWillEnter() {
    console.log("sono qui");
    const userID = localStorage.getItem("user-id") as string;
    console.log("UserID", userID);
    this.tickets = this.bookingService.getBookingsFromUserID(userID);
    console.log("Tickets", this.tickets);
    // this.userTicket = this.ticketService.getTicketById(this.tickets);
  }
}
