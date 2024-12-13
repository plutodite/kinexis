import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitostandPage } from './sitostand.page';

const routes: Routes = [
  {
    path: '',
    component: SitostandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitostandPageRoutingModule {}
