import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { BookingService } from 'src/services/booking.service';
import { Ticket } from 'src/interfaces';

@Component({
  selector: "app-tickets-user",
  templateUrl: "./tickets-user.page.html",
  styleUrls: ["./tickets-user.page.scss"]
})
export class TicketsUserPage {

  private tickets: Ticket[];

  constructor(
    private navCtrl: NavController,
    private bookingService: BookingService
    ) { }
    
    async ionViewWillEnter(){
      console.log('sono qui');
      console.log(this.tickets);
      let userID = localStorage.getItem('user-id') as string;
      this.ticketss = this.bookingService.getBookingsFromUserID(userID);
  }
}
