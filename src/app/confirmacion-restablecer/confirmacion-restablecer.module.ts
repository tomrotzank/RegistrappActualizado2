import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionRestablecerPageRoutingModule } from './confirmacion-restablecer-routing.module';

import { ConfirmacionRestablecerPage } from './confirmacion-restablecer.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionRestablecerPageRoutingModule,
    SharedModule
  ],
  declarations: [ConfirmacionRestablecerPage]
})
export class ConfirmacionRestablecerPageModule {}
