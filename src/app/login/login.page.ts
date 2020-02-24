import { Component } from "@angular/core";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { NavController, ToastController } from "@ionic/angular";
import { LoginUser } from "src/interfaces";
import { LoginService } from "src/services/login.service";
import { BookingService } from "src/services/booking.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {
  private isUserLogged: boolean = false;
  private userID: string;

  loginUserData: LoginUser = {
    email: "",
    password: ""
  };

  constructor(
    public navCtrl: NavController,
    private loginService: LoginService,
    private bookingService: BookingService
  ) {
    this.loginService.userLoggedStatus.subscribe(data => {
      this.isUserLogged = data as boolean;
    });
  }

  async goRegister() {
    await this.navCtrl.navigateForward("/register");
  }

  async login() {
    this.loginService.login(this.loginUserData);
    this.clearUserModel();
  }

  async logout() {
    this.loginService.logout();
  }

  clearUserModel() {
    this.loginUserData.email = "";
    this.loginUserData.password = "";
  }

  detailsTickets() {
    this.navCtrl.navigateForward("/tickets-user");
  }
}
