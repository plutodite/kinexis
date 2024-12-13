import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegswingsPage } from './legswings.page';

const routes: Routes = [
  {
    path: '',
    component: LegswingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegswingsPageRoutingModule {}
