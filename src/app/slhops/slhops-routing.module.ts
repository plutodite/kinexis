import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlhopsPage } from './slhops.page';

const routes: Routes = [
  {
    path: '',
    component: SlhopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlhopsPageRoutingModule {}
