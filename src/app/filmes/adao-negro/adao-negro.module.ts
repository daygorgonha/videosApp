import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdaoNegroPageRoutingModule } from './adao-negro-routing.module';

import { AdaoNegroPage } from './adao-negro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdaoNegroPageRoutingModule
  ],
  declarations: [AdaoNegroPage]
})
export class AdaoNegroPageModule {}
