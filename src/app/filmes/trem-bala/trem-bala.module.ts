import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TremBalaPageRoutingModule } from './trem-bala-routing.module';

import { TremBalaPage } from './trem-bala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TremBalaPageRoutingModule
  ],
  declarations: [TremBalaPage]
})
export class TremBalaPageModule {}
