import { Component } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';
import { LoginUser } from 'src/interfaces';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  private isUserLogged: boolean = false;

  loginUserData: LoginUser = {
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    private loginService: LoginService,
    private toast: ToastController
  ) {
    this.loginService.userLoggedStatus.subscribe(
      (data) => { 
        this.isUserLogged = data as boolean; 
      });
  }

  async goRegister() {
    await this.navCtrl.navigateForward('/register');
  }

  async login() {
    this.loginService.login(this.loginUserData);
    this.clearUserModel();
  }

    //.subscribe(
      //(res: HttpResponse<User>) => {

        // console.log(res.headers.get('Authorization'));

        // localStorage.setItem('auth-token', res.headers.get('Authorization'));
        // this.loginService.setUserLoggedIn();
        
        // this.loginToast(`Welcome ${this.loginUserData.email}`);

        // this.clearUserModel();
        // this.navCtrl.navigateForward('/tabs/tab2');
      //},
      //(err: HttpErrorResponse) => {

        // this.loginToast('Invalid username or password');
        // console.log(err);

      //}
    //);

  async logout() {
    this.loginService.logout();

    // if (this.checkLog === true) {
    //   this.loginToast(`Goodbye ${this.loginUserData.email}`);
    //   this.loginService.logout();
    //   this.isAuthenticated = true;
    // } else {
    //   this.loginToast('Login needed');
    // }

  }

  // async loginToast(message: string) {
  //   const toast = await this.toast.create({
  //     message,
  //     duration: 1000,
  //     keyboardClose: true,
  //     position: 'middle'
  //   });
  //   toast.present();
  // }

  clearUserModel() {
    this.loginUserData.email = '';
    this.loginUserData.password = '';
  }

  detailsTickets() {
    this.navCtrl.navigateForward('/tickets-user');
  }
}
