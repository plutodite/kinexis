import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToeraisesPage } from './toeraises.page';

const routes: Routes = [
  {
    path: '',
    component: ToeraisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToeraisesPageRoutingModule {}
