import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { User } from 'src/interfaces';

@Injectable({ providedIn: 'root' })
export class RegistrationService {

  private url = `${environment.SERVER_URL}users`;

  constructor(private http: HttpClient) {}

  public registerUser(newUser: User) {
    return this.http.post<User>(this.url, newUser, environment.HTTP_OPTIONS);
  }
}
