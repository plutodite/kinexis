import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinisquatsPageRoutingModule } from './minisquats-routing.module';

import { MinisquatsPage } from './minisquats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinisquatsPageRoutingModule
  ],
  declarations: [MinisquatsPage]
})
export class MinisquatsPageModule {}
