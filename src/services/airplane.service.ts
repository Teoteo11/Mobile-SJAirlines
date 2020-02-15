import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Airport, Airplane } from "src/interfaces";

@Injectable({
  providedIn: "root"
})
export class AirplaneService {
  constructor(private httpClient: HttpClient) {}
  apiURL = `http://localhost:3004/airplanes`;

  public getAirplaneById(id: string) {
    return this.httpClient
      .get<Airplane>(`${this.apiURL}/?id=${id}`)
      .toPromise();
  }
}
