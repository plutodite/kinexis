import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtletPageRoutingModule } from './atlet-routing.module';

import { AtletPage } from './atlet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtletPageRoutingModule
  ],
  declarations: [AtletPage]
})
export class AtletPageModule {}
