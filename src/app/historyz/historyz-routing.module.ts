import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryzPage } from './historyz.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryzPageRoutingModule {}
