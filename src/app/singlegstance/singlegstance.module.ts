import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglegstancePageRoutingModule } from './singlegstance-routing.module';

import { SinglegstancePage } from './singlegstance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglegstancePageRoutingModule
  ],
  declarations: [SinglegstancePage]
})
export class SinglegstancePageModule {}
