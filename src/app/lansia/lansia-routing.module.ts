import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LansiaPage } from './lansia.page';

const routes: Routes = [
  {
    path: '',
    component: LansiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LansiaPageRoutingModule {}
