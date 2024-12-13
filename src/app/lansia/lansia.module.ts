import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LansiaPageRoutingModule } from './lansia-routing.module';

import { LansiaPage } from './lansia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LansiaPageRoutingModule
  ],
  declarations: [LansiaPage]
})
export class LansiaPageModule {}
