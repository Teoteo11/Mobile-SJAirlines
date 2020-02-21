import { NavController, ToastController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { User } from "./../../interfaces";
import { RegistrationService } from 'src/services/registration.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage {

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
    private register: RegistrationService,
    private toastController: ToastController
  ) {}

  async backtoLogin() {
    await this.navCtrl.navigateBack("/tabs/login");
  }

  registerUser() {
    this.register.registerUser(this.registerUserData).subscribe(
      (res: HttpResponse<User>) => {
        localStorage.setItem("token", res.headers.get('Authorization'));
        this.presentToast("Registration confirmed");
        this.navCtrl.navigateForward("/tabs/login");
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
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
