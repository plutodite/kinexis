import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidestepPageRoutingModule } from './sidestep-routing.module';

import { SidestepPage } from './sidestep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidestepPageRoutingModule
  ],
  declarations: [SidestepPage]
})
export class SidestepPageModule {}
