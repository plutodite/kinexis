import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglegstancePage } from './singlegstance.page';

const routes: Routes = [
  {
    path: '',
    component: SinglegstancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglegstancePageRoutingModule {}
