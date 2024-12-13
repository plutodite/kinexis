import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryzPageRoutingModule } from './historyz-routing.module';

import { HistoryzPage } from './historyz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryzPageRoutingModule
  ],
  declarations: [HistoryzPage]
})
export class HistoryzPageModule {}
