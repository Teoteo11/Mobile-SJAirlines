export interface Ticket {
  _id?: string;
  idCompany: number;
  idFlight: string;
  isChecked: boolean;
}
export interface Airplane {
  _id?: string;
  model: string;
  numSeats: number;
}
export interface User {
  _id?: string;
  email: string;
  username: string;
  name: string;
  surname: string;
  password: string;
  tickets: Array<Ticket>;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface Flight {
  _id?: string;
  departure: string;
  destination: string;
  duration: number;
  price: number;
  idAirplane: number;
}
export interface Route {
  _id?: string;
  placeDeparture: string;
  placeDestination: string;
}
export interface Company {
  _id?: string;
  name: string;
  airplanes: Array<Airplane>;
  routes: Array<Route>;
  maxAirplanes: number;
}

export interface Airport {
  _id?: string;
  city: string;
  country: string;
  name: string;
}
