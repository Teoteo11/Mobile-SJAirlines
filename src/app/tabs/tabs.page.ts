import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  
  private isUserLogged: boolean;

  constructor(private loginService: LoginService) { }

  async ngOnInit(){

    this.loginService.userLoggedStatus.subscribe((data) => {
      this.isUserLogged = data as boolean;
    });
    
  }

}
