import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoundingPageRoutingModule } from './bounding-routing.module';

import { BoundingPage } from './bounding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoundingPageRoutingModule
  ],
  declarations: [BoundingPage]
})
export class BoundingPageModule {}
