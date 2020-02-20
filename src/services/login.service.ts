import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { NavController, ToastController } from "@ionic/angular";

import { User, LoginUs } from "src/interfaces";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  token: string;
  decoded: any;
  private userID: string;
  private url = "https://api.sjairlines.tk/login";
  // private url = "http://localhost:3004/login";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "text/string"
    }),
    observe: "response" as "response"
  };

  constructor(
    private http: HttpClient,
    private navController: NavController,
    private toastController: ToastController
  ) {}

  public loginUser(loginUser: LoginUs) {
    return this.http.post<any>(`${this.url}`, loginUser);
  }

  logout() {
    localStorage.removeItem("token");
    this.navController.navigateBack(["/"]);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
