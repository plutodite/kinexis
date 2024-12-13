import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpvidPage } from './upvid.page';

const routes: Routes = [
  {
    path: '',
    component: UpvidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpvidPageRoutingModule {}
