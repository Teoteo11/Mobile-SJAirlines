import { Airport } from "./../interfaces";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AirportsService {
  constructor(private httpClient: HttpClient) {}
  // apiURL = `http://localhost:3004/airports`;
  apiURL = `https://api.sjairlines.tk/airports`;

  public getAirports() {
    return this.httpClient.get<Airport[]>(`${this.apiURL}`).toPromise();
  }

  // tslint:disable-next-line: ban-types
  public getAirportById(id: string) {
    return this.httpClient.get<Airport>(`${this.apiURL}/?id=${id}`).toPromise();
  }
}
