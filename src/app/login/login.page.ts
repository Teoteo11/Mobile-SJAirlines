import { LoginService } from "./../../services/login.service";
import { NavController, ToastController } from "@ionic/angular";
import { Component } from "@angular/core";
import { LoginUs } from "src/interfaces";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {
  checkLog = false;
  userLog: LoginUs = {
    email: "",
    password: ""
  };

  constructor(
    public navCtrl: NavController,
    private loginService: LoginService,
    private toast: ToastController
  ) {}

  async goRegister() {
    await this.navCtrl.navigateForward("/register");
  }

  isLoggedUser() {
    this.loginService.loginUser(this.userLog).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.response);
        this.loginToast(`Welcome ${this.userLog.email}`);
        this.userLog.email = "";
        this.userLog.password = "";
        this.checkLog = true;
        this.navCtrl.navigateForward("/tabs/tab2");
      },
      err => {
        this.loginToast("Invalid username or password");
        console.log(err);
      }
    );
  }

  async logoutUser() {
    if (this.checkLog === true) {
      await this.loginService.logout();
      this.loginToast(`Goodbye ${this.userLog.email}`);
      this.checkLog = false;
    } else {
      this.loginToast("Login needed");
    }
  }

  async loginToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 1000,
      keyboardClose: true,
      position: "middle"
    });
    toast.present();
  }
}
