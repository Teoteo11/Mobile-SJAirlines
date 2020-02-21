import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketsUserPageRoutingModule } from './tickets-user-routing.module';

import { TicketsUserPage } from './tickets-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketsUserPageRoutingModule
  ],
  declarations: [TicketsUserPage]
})
export class TicketsUserPageModule {}
