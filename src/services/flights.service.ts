import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Flight } from "src/interfaces";

@Injectable({
  providedIn: "root"
})
export class FlightsService {
  constructor(private httpClient: HttpClient) {}
  apiURL = `http://localhost:3004/flights`;

  public getFlights(params) {
    Object.keys(params).forEach(
      key => params[key] === undefined && delete params[key]
    );
    console.log("params:", params);
    const queryString = Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
    console.log(queryString);
    return this.httpClient
      .get<Flight[]>(`${this.apiURL}/${params.departure}/1?${queryString}`)
      .toPromise();
  }
}
