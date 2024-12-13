import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttwalkPageRoutingModule } from './httwalk-routing.module';

import { HttwalkPage } from './httwalk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttwalkPageRoutingModule
  ],
  declarations: [HttwalkPage]
})
export class HttwalkPageModule {}
