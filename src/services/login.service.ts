import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

import { User } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private url = environment.apiUrl + '/login';
  private url = 'http://localhost:3004/login';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'text/string' }),
    observe: 'response' as 'response'
  }

  constructor(
    private http: HttpClient,
    private navController: NavController,
    private toastController: ToastController
    ) { }

  login(email: string, password: string) {
    return this.http.post(this.url, { email, password }, this.httpOptions)
      .subscribe((res: HttpResponse<any>) => {
        
        // FIXME:
        let user: User = res.body;

        console.log(user.name);
        localStorage.setItem('username', user.name);
        
        // 2. faccio l'output del nome

        localStorage.setItem('token', res.headers.get('Authorization'));
        this.navController.navigateForward('/dashboard');
        //console.log(res.headers.get('Authorization'));
    }, (err: Error) => {
      // console.log('Errore nel login. Inserisci username o password');
      this.presentToast('Login non avvenuto');
    });
  }

  logout() {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({ message, duration: 2000 });
    toast.present();
  }
}
