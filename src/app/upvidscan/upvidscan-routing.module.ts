import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpvidscanPage } from './upvidscan.page';

const routes: Routes = [
  {
    path: '',
    component: UpvidscanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpvidscanPageRoutingModule {}
