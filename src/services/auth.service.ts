import { LoginUs } from "./../interfaces";
import { Injectable } from "@angular/core";
import { User } from "../interfaces";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = "https://api.sjairlines.tk/users";
  token: string;
  decoded: any;
  constructor(private httpClient: HttpClient, private router: Router) {}

  public registerUser(newUser: User) {
    return this.httpClient.post<any>(`${this.authUrl}`, newUser);
  }

  public getToken() {
    return localStorage.getItem("token");
  }

  // public loginUser(loginUser: LoginUs) {
  //   return this.httpClient.post<any>(`${this.authUrl}/login`, loginUser);
  // }
}
