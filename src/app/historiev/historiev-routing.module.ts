import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorievPage } from './historiev.page';

const routes: Routes = [
  {
    path: '',
    component: HistorievPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorievPageRoutingModule {}
