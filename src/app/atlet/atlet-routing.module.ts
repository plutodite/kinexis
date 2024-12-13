import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtletPage } from './atlet.page';

const routes: Routes = [
  {
    path: '',
    component: AtletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtletPageRoutingModule {}
