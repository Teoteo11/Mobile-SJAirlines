import { LoginService } from "./../../services/login.service";
import { RegisterPage } from "./../register/register.page";
import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  constructor(
    public navCtrl: NavController,
    private loginService: LoginService
  ) {}
  ngOnInit() {}

  login() {
    console.log("Username:", this.username);
    console.log("Password:", this.password);
    // const res = this.loginService.controlUser(this.username, this.password);
    // console.log(res);
  }

  async goRegister() {
    await this.navCtrl.navigateForward("/register");
  }
}
