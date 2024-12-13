import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitostandPageRoutingModule } from './sitostand-routing.module';

import { SitostandPage } from './sitostand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitostandPageRoutingModule
  ],
  declarations: [SitostandPage]
})
export class SitostandPageModule {}
