import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';
import { User, LoginUser } from 'src/interfaces';
import { environment } from 'src/environments/environment';
import { strings } from 'src/environments/strings';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {

  public userLoggedStatus: BehaviorSubject<boolean>;
  private url = `${environment.SERVER_URL}login`;

  constructor(
    private http: HttpClient, 
    private navController: NavController,
    private toastController: ToastController
    ) {
      this.userLoggedStatus = new BehaviorSubject<boolean>(false);      
    }

  public login(loginUserData: LoginUser) {

    this.http.post<User>(`${this.url}`, loginUserData, environment.HTTP_OPTIONS).subscribe(
      (res: HttpResponse<User>) => {
        
        localStorage.setItem('auth-token', res.headers.get('Authorization'));
        localStorage.setItem('user-id', res.body._id);
        localStorage.setItem('name', res.body.name);
        localStorage.setItem('surname', res.body.surname);
        localStorage.setItem('email', res.body.email);

        this.setUserLoggedIn();
        this.presentToast(strings.LOGIN_CORRECT);
        this.navController.navigateForward('/tabs/tab2');
      },
      (err: HttpErrorResponse) => {
        this.userLoggedStatus.next(false);
        this.presentToast(strings.LOGIN_WRONG);
      }
    );
  }

  public logout() {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-id');
    this.setUserLoggedOut();
    this.navController.navigateBack(['/']);
  }

  public setUserLoggedIn() {
    this.userLoggedStatus.next(true);
  }

  public setUserLoggedOut() {
    this.userLoggedStatus.next(false);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
      keyboardClose: true,
      position: 'bottom'
    });

    toast.present();
  }
}
