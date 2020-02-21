import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tickets-user",
  templateUrl: "./tickets-user.page.html",
  styleUrls: ["./tickets-user.page.scss"]
})
export class TicketsUserPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  async backtoLogin() {
    await this.navCtrl.navigateBack("/tabs/login");
  }
}
