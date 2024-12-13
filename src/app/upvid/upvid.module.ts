import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpvidPageRoutingModule } from './upvid-routing.module';

import { UpvidPage } from './upvid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpvidPageRoutingModule
  ],
  declarations: [UpvidPage]
})
export class UpvidPageModule {}
