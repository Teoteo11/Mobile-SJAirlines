import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Flight } from "src/interfaces";

@Injectable({
  providedIn: "root"
})
export class FlightsService {
  constructor(private httpClient: HttpClient) {}
  apiURL = `http://localhost:3004/flights`;

  public getFlights(data) {
    Object.keys(data.params).forEach(
      key => data.params[key] === undefined && delete data.params[key]
    );
    Object.keys(data.query).forEach(
      key => data.query[key] === undefined && delete data.query[key]
    );
    console.log("params:", data);
    const queryString = Object.keys(data.query)
      .map(key => key + "=" + data.query[key])
      .join("&");
    console.log(queryString);
    return this.httpClient
      .get<Flight[]>(
        `${this.apiURL}/${data.params.departure}/${data.params.destination}/1?${queryString}`
      )
      .toPromise();
  }
}
