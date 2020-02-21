import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsUserPage } from './tickets-user.page';

const routes: Routes = [
  {
    path: '',
    component: TicketsUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsUserPageRoutingModule {}
