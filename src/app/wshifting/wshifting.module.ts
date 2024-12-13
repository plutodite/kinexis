import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WshiftingPageRoutingModule } from './wshifting-routing.module';

import { WshiftingPage } from './wshifting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WshiftingPageRoutingModule
  ],
  declarations: [WshiftingPage]
})
export class WshiftingPageModule {}
