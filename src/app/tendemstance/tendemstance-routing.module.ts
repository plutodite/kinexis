import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TendemstancePage } from './tendemstance.page';

const routes: Routes = [
  {
    path: '',
    component: TendemstancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TendemstancePageRoutingModule {}
