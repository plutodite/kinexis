import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RehabilitasiPageRoutingModule } from './rehabilitasi-routing.module';

import { RehabilitasiPage } from './rehabilitasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RehabilitasiPageRoutingModule
  ],
  declarations: [RehabilitasiPage]
})
export class RehabilitasiPageModule {}
