import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TremBalaPage } from './trem-bala.page';

const routes: Routes = [
  {
    path: '',
    component: TremBalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TremBalaPageRoutingModule {}
