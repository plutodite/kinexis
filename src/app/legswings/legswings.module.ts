import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegswingsPageRoutingModule } from './legswings-routing.module';

import { LegswingsPage } from './legswings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegswingsPageRoutingModule
  ],
  declarations: [LegswingsPage]
})
export class LegswingsPageModule {}
