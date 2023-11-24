import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionRestablecerPage } from './confirmacion-restablecer.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionRestablecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionRestablecerPageRoutingModule {}
