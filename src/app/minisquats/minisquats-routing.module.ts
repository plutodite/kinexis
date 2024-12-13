import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinisquatsPage } from './minisquats.page';

const routes: Routes = [
  {
    path: '',
    component: MinisquatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinisquatsPageRoutingModule {}
