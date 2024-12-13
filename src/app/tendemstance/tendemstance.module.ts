import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TendemstancePageRoutingModule } from './tendemstance-routing.module';

import { TendemstancePage } from './tendemstance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TendemstancePageRoutingModule
  ],
  declarations: [TendemstancePage]
})
export class TendemstancePageModule {}
