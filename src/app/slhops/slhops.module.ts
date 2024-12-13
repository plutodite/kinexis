import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlhopsPageRoutingModule } from './slhops-routing.module';

import { SlhopsPage } from './slhops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlhopsPageRoutingModule
  ],
  declarations: [SlhopsPage]
})
export class SlhopsPageModule {}
