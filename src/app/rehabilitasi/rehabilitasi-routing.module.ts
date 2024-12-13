import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RehabilitasiPage } from './rehabilitasi.page';

const routes: Routes = [
  {
    path: '',
    component: RehabilitasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RehabilitasiPageRoutingModule {}
