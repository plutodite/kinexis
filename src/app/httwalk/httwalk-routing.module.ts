import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttwalkPage } from './httwalk.page';

const routes: Routes = [
  {
    path: '',
    component: HttwalkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttwalkPageRoutingModule {}
