import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Flight } from "src/interfaces";

@Injectable({
  providedIn: "root"
})
export class FlightsService {
  constructor(private httpClient: HttpClient) {}
  apiURL = `http://localhost:3004/flights`;
  //apiURL = `https://api.sjairlines.tk/flights`;

  public getFlights(query) {
    Object.keys(query).forEach(
      key => query[key] === undefined && delete query[key]
    );
    console.log("params:", query);
    const queryString = Object.keys(query)
      .map(key => key + "=" + query[key])
      .join("&");
    console.log(queryString);
    return this.httpClient
      .get<Flight[]>(`${this.apiURL}/1?${queryString}`)
      .toPromise();
  }
}
