import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HkdrillsPageRoutingModule } from './hkdrills-routing.module';

import { HkdrillsPage } from './hkdrills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HkdrillsPageRoutingModule
  ],
  declarations: [HkdrillsPage]
})
export class HkdrillsPageModule {}
