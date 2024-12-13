import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoundingPage } from './bounding.page';

const routes: Routes = [
  {
    path: '',
    component: BoundingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoundingPageRoutingModule {}
