import { Component } from "@angular/core";
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NavController, ToastController } from "@ionic/angular";
import { LoginUser, User } from 'src/interfaces';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {

  checkLog = false;

  // ** Binded par
  private loginUserData: LoginUser = {
    email: '', 
    password: ''
  }

  constructor(
    public navCtrl: NavController,
    private loginService: LoginService,
    private toast: ToastController
  ) { }

  async goRegister() {
    await this.navCtrl.navigateForward("/register");
  }

  login() {

    this.loginService.login(this.loginUserData).subscribe(
      (res: HttpResponse<User>) => {
        console.log(res.headers.get('Authorization'));
        localStorage.setItem('auth-token', res.headers.get('Authorization'));
        this.loginToast(`Welcome ${this.loginUserData.email}`);
        this.clearUserModel();
        this.checkLog = true;
        this.navCtrl.navigateForward("/tabs/tab2");
      },
      (err: HttpErrorResponse) => {
        this.loginToast("Invalid username or password");
        console.log(err);
      }
    );
  }

  logout() {
    if (this.checkLog === true) {
      this.loginToast(`Goodbye ${this.loginUserData.email}`);
      this.loginService.logout();
      this.checkLog = false;
    } else {
      this.loginToast("Login needed");
    }
  }

  async loginToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 1000,
      keyboardClose: true,
      position: "middle"
    });
    toast.present();
  }

  clearUserModel() {
    this.loginUserData.email = '';
    this.loginUserData.password = '';
  }
}
