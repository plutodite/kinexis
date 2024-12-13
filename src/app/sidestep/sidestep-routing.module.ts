import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidestepPage } from './sidestep.page';

const routes: Routes = [
  {
    path: '',
    component: SidestepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidestepPageRoutingModule {}
