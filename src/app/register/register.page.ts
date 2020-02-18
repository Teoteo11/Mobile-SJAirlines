import { NavController, ToastController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/services/auth.service";
import { User } from "./../../interfaces";
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  // email: string;
  // username: string;
  // password: string;
  public registerUserData: User = {
    username: "",
    password: "",
    name: "",
    surname: "",
    email: "",
    tickets: []
  };
  constructor(
    private navCtrl: NavController,
    private auth: AuthService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async backtoLogin() {
    await this.navCtrl.navigateBack("/tabs/login");
  }
  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.response);
        this.presentToast("Registration confirmed");
        this.navCtrl.navigateForward("/tabs/login");
      },
      err => console.log(err)
    );
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
