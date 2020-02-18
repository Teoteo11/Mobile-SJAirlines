import { LoginService } from "./../../services/login.service";
import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {

  private email: string;
  private password: string;

  constructor(
    public navCtrl: NavController,
    private loginService: LoginService
  ) {}

  async login() {
    this.loginService.login(this.email, this.password);

    // console.log("Username:", this.email);
    // console.log("Password:", this.password);
    // console.log(res);
  }

  async goRegister() {
    await this.navCtrl.navigateForward("/register");
  }
}
