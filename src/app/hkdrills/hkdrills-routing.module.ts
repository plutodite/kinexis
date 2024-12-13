import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HkdrillsPage } from './hkdrills.page';

const routes: Routes = [
  {
    path: '',
    component: HkdrillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HkdrillsPageRoutingModule {}
