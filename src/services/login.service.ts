import { User } from "./../interfaces";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  apiURL = `http://localhost:3004/login`;

  public controlUser(email: string, password: string): Observable<any> {
    return this.httpClient.post(this.apiURL, {
      email,
      password
    });
  }

  // TODO: salva token()
}
