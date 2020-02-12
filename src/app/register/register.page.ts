import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  email: string;
  username: string;
  password: string;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  backtoLogin() {
    this.navCtrl.navigateBack("/login");
  }
}
