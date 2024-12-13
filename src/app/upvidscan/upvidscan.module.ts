import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpvidscanPageRoutingModule } from './upvidscan-routing.module';

import { UpvidscanPage } from './upvidscan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpvidscanPageRoutingModule
  ],
  declarations: [UpvidscanPage]
})
export class UpvidscanPageModule {}
