import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { NavController } from "@ionic/angular";

import { User, LoginUser } from "src/interfaces";
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: "root" })
export class LoginService {
  
  private url = `${environment.SERVER_URL}login`;

  constructor(
    private http: HttpClient,
    private navController: NavController
  ) {}

  public login(loginUserData: LoginUser) {
    return this.http.post<User>(`${this.url}`, loginUserData, environment.HTTP_OPTIONS);
  }

  public logout() {
    localStorage.removeItem('token');
    this.navController.navigateBack(["/"]);
  }
}
