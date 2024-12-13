import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToeraisesPageRoutingModule } from './toeraises-routing.module';

import { ToeraisesPage } from './toeraises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToeraisesPageRoutingModule
  ],
  declarations: [ToeraisesPage]
})
export class ToeraisesPageModule {}
