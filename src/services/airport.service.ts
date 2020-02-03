import { Airport } from "./../interfaces";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AirportsService {
  constructor(private httpClient: HttpClient) {}
  apiURL = `http://localhost:3003/airports`;

  public getAirports() {
    return this.httpClient.get<Airport[]>(`${this.apiURL}`).toPromise();
  }

  public getAirportById(id: string) {
    return this.httpClient.get<Airport>(`${this.apiURL}/${id}`).toPromise();
  }
}
