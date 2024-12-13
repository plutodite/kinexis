import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorievPageRoutingModule } from './historiev-routing.module';

import { HistorievPage } from './historiev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorievPageRoutingModule
  ],
  declarations: [HistorievPage]
})
export class HistorievPageModule {}
