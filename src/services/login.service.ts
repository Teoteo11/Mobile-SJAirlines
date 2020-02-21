import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { NavController, ToastController } from "@ionic/angular";

import { LoginUs } from "src/interfaces";
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: "root" })
export class LoginService {
  
  token: string;
  decoded: any;
  private url = `${environment.SERVER_URL}login`;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "text/string"
    }),
    observe: "response" as "response"
  };

  constructor(
    private http: HttpClient,
    private navController: NavController
  ) {}

  public loginUser(loginUser: LoginUs) {
    return this.http.post<any>(`${this.url}`, loginUser);
  }

  logout() {
    localStorage.removeItem("token");
    this.navController.navigateBack(["/"]);
  }
}
