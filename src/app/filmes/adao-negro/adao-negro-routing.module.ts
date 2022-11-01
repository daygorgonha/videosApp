import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdaoNegroPage } from './adao-negro.page';

const routes: Routes = [
  {
    path: '',
    component: AdaoNegroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdaoNegroPageRoutingModule {}
